import os
from contextlib import closing
from datetime import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)


DB_CONFIG = {
    "host": os.getenv("MYSQL_HOST", "127.0.0.1"),
    "port": int(os.getenv("MYSQL_PORT", "3306")),
    "user": os.getenv("MYSQL_USER", "root"),
    "password": os.getenv("MYSQL_PASSWORD", ""),
    "database": os.getenv("MYSQL_DATABASE", "parking_db"),
}


def get_db():
    return mysql.connector.connect(**DB_CONFIG)


def normalize_plot(row):
    return {
        "id": f"P{row['id']:03d}",
        "db_id": row["id"],
        "number": row["number"],
        "status": row["status"],
        "vehicle": row["vehicle"] or "—",
        "checkin": row["checkin"].strftime("%Y-%m-%d %H:%M") if row["checkin"] else "—",
        "checkout": row["checkout"].strftime("%Y-%m-%d %H:%M") if row["checkout"] else "—",
    }


def normalize_violation(row):
    return {
        "id": f"V{row['id']:03d}",
        "db_id": row["id"],
        "vehicle": row["vehicle"],
        "type": row["type"],
        "date": row["date"].strftime("%Y-%m-%d") if row["date"] else "",
        "fine": f"${float(row['fine_amount']):.0f}" if row["fine_amount"] is not None else "$0",
        "status": row["status"],
    }


@app.errorhandler(Error)
def handle_db_error(error):
    return jsonify({"error": "Database error", "details": str(error)}), 500


@app.route("/api/health", methods=["GET"])
def health_check():
    try:
        with closing(get_db()) as db, closing(db.cursor()) as cur:
            cur.execute("SELECT 1")
            cur.fetchone()
        return jsonify({"status": "ok", "database": DB_CONFIG["database"]})
    except Error as error:
        return jsonify({"status": "error", "details": str(error)}), 500


@app.route("/api/area/<int:area_id>", methods=["GET"])
def get_area(area_id):
    with closing(get_db()) as db, closing(db.cursor(dictionary=True)) as cur:
        cur.execute("SELECT * FROM parking_areas WHERE id = %s", (area_id,))
        area = cur.fetchone()

    if area:
        return jsonify(area)
    return jsonify({"error": "Not found"}), 404


@app.route("/api/area/<int:area_id>", methods=["PUT"])
def update_area(area_id):
    data = request.get_json(silent=True) or {}
    required_fields = ["area_name", "customer", "address", "type", "parking_code"]
    missing = [field for field in required_fields if field not in data]
    if missing:
        return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

    with closing(get_db()) as db, closing(db.cursor()) as cur:
        cur.execute(
            """
            UPDATE parking_areas
            SET area_name=%s, customer=%s, address=%s, type=%s, parking_code=%s
            WHERE id=%s
            """,
            (
                data["area_name"],
                data["customer"],
                data["address"],
                data["type"],
                data["parking_code"],
                area_id,
            ),
        )
        db.commit()

        if cur.rowcount == 0:
            return jsonify({"error": "Not found"}), 404

    return jsonify({"message": "Updated successfully"})


@app.route("/api/plots", methods=["GET"])
def get_plots():
    with closing(get_db()) as db, closing(db.cursor(dictionary=True)) as cur:
        cur.execute("SELECT * FROM parking_plots ORDER BY id")
        plots = [normalize_plot(row) for row in cur.fetchall()]
    return jsonify(plots)


@app.route("/api/plots", methods=["POST"])
def add_plot():
    data = request.get_json(silent=True) or {}
    number = (data.get("number") or "").strip()
    status = data.get("status", "Available")
    vehicle = (data.get("vehicle") or "").strip() or None

    if not number:
        return jsonify({"error": "Plot number is required"}), 400

    with closing(get_db()) as db, closing(db.cursor()) as cur:
        cur.execute(
            """
            INSERT INTO parking_plots (area_id, number, status, vehicle, checkin, checkout)
            VALUES (%s, %s, %s, %s, %s, %s)
            """,
            (1, number, status, vehicle, None, None),
        )
        db.commit()
        new_id = cur.lastrowid

    return jsonify({"id": f"P{new_id:03d}", "db_id": new_id, "message": "Plot added"}), 201


@app.route("/api/plots/<int:plot_id>", methods=["PUT"])
def update_plot(plot_id):
    data = request.get_json(silent=True) or {}
    number = (data.get("number") or "").strip()
    status = data.get("status", "Available")
    vehicle = (data.get("vehicle") or "").strip() or None

    if not number:
        return jsonify({"error": "Plot number is required"}), 400

    with closing(get_db()) as db, closing(db.cursor()) as cur:
        cur.execute(
            """
            UPDATE parking_plots
            SET number=%s, status=%s, vehicle=%s
            WHERE id=%s
            """,
            (number, status, vehicle, plot_id),
        )
        db.commit()

        if cur.rowcount == 0:
            return jsonify({"error": "Not found"}), 404

    return jsonify({"message": "Updated"})


@app.route("/api/plots/<int:plot_id>", methods=["DELETE"])
def delete_plot(plot_id):
    with closing(get_db()) as db, closing(db.cursor()) as cur:
        cur.execute("DELETE FROM parking_plots WHERE id=%s", (plot_id,))
        db.commit()

        if cur.rowcount == 0:
            return jsonify({"error": "Not found"}), 404

    return jsonify({"message": "Deleted"})


@app.route("/api/violations", methods=["GET"])
def get_violations():
    with closing(get_db()) as db, closing(db.cursor(dictionary=True)) as cur:
        cur.execute("SELECT * FROM violations ORDER BY date DESC, id DESC")
        rows = [normalize_violation(row) for row in cur.fetchall()]
    return jsonify(rows)


@app.route("/api/violations", methods=["POST"])
def add_violation():
    data = request.get_json(silent=True) or {}
    vehicle = (data.get("vehicle") or "").strip()
    violation_type = (data.get("type") or "").strip()

    try:
        fine = float(str(data.get("fine", 0)).replace("$", "").strip() or 0)
    except ValueError:
        return jsonify({"error": "Invalid fine amount"}), 400

    if not vehicle or not violation_type:
        return jsonify({"error": "Vehicle and violation type are required"}), 400

    with closing(get_db()) as db, closing(db.cursor()) as cur:
        cur.execute(
            """
            INSERT INTO violations (area_id, vehicle, type, date, fine_amount, status)
            VALUES (%s, %s, %s, %s, %s, 'Pending')
            """,
            (1, vehicle, violation_type, datetime.today().strftime("%Y-%m-%d"), fine),
        )
        db.commit()
        new_id = cur.lastrowid

    return jsonify({"id": f"V{new_id:03d}", "db_id": new_id, "message": "Violation reported"}), 201


@app.route("/api/revenue", methods=["GET"])
def get_revenue():
    with closing(get_db()) as db, closing(db.cursor(dictionary=True)) as cur:
        cur.execute(
            """
            SELECT
                COALESCE(SUM(amount), 0) AS total_sales,
                COALESCE(SUM(expense), 0) AS expenses,
                COALESCE(SUM(amount), 0) - COALESCE(SUM(expense), 0) AS revenue
            FROM transactions
            WHERE MONTH(date) = MONTH(CURDATE()) AND YEAR(date) = YEAR(CURDATE())
            """
        )
        row = cur.fetchone()
    return jsonify(row)


@app.route("/api/stats", methods=["GET"])
def get_stats():
    with closing(get_db()) as db, closing(db.cursor(dictionary=True)) as cur:
        cur.execute(
            """
            SELECT
                (SELECT COUNT(*) FROM parking_plots) AS total_plots,
                (SELECT COUNT(*) FROM parking_plots WHERE status='Occupied') AS occupied,
                (SELECT COUNT(*) FROM parking_plots WHERE status='Available') AS available,
                (SELECT COUNT(*) FROM violations WHERE status='Pending') AS pending_violations
            """
        )
        stats = cur.fetchone()
    return jsonify(stats)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
