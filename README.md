# 🅿 ParkWare – Parking Lot Management System
## Complete Setup Guide (DBMS Project)

---

## 📁 Project Structure

```
parking-lot-system/
├── frontend/
│   ├── index.html      ← Main UI (open in browser)
│   ├── style.css       ← All styles
│   └── app.js          ← Frontend logic + API calls
├── backend/
│   ├── app.py          ← Flask REST API
│   └── requirements.txt
└── database/
    └── schema.sql      ← MySQL tables + sample data
```

---

## 🛠 WHAT YOU NEED TO INSTALL

### 1. Python 3.10+
Download from https://www.python.org/downloads/
During install, ✅ check "Add Python to PATH"

```bash
# Verify install
python --version
```

### 2. MySQL Community Server 8.0
Download from https://dev.mysql.com/downloads/mysql/
- Install MySQL Server + MySQL Workbench (optional but helpful)
- Set a root password (remember it!)

```bash
# Verify install
mysql --version
```

### 3. pip packages (Python libraries)
Open terminal in the `backend/` folder:

```bash
pip install flask flask-cors mysql-connector-python
```

---

## 🗄 DATABASE SETUP

### Step 1: Open MySQL
```bash
mysql -u root -p
# Enter your password when prompted
```

### Step 2: Run the schema
```bash
# In MySQL shell:
source /path/to/parking-lot-system/database/schema.sql

# OR from terminal:
mysql -u root -p < database/schema.sql
```

### Step 3: Configure your local MySQL connection
This project now reads MySQL settings from environment variables instead of hard-coding them in `app.py`.

```bash
export MYSQL_HOST=127.0.0.1
export MYSQL_PORT=3306
export MYSQL_USER=root
export MYSQL_PASSWORD='your_mysql_password'
export MYSQL_DATABASE=parking_db
```

If your MySQL binary is installed but `mysql --version` does not work, add the MySQL `bin` folder to your shell `PATH` before running commands.

---

## 🚀 RUNNING THE PROJECT

### Step 1: Start the Flask backend
```bash
python app.py
```
You should see:
```
* Running on http://127.0.0.1:5000
```

Optional health check:
```bash
curl http://127.0.0.1:5000/api/health
```

### Step 2: Open the frontend
Just double-click `frontend/index.html` in your file manager
OR open in browser:
```
file:///path/to/parking-lot-system/frontend/index.html
```

> ⚠️ The UI works in "demo mode" even without the backend running.
> When backend is running, data will be saved to MySQL.

---

## 🔌 API ENDPOINTS REFERENCE

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| GET    | /api/area/1           | Get area details        |
| PUT    | /api/area/1           | Update area info        |
| GET    | /api/plots            | List all parking plots  |
| POST   | /api/plots            | Add new plot            |
| PUT    | /api/plots/:id        | Update a plot           |
| DELETE | /api/plots/:id        | Delete a plot           |
| GET    | /api/violations       | List all violations     |
| POST   | /api/violations       | Report a violation      |
| GET    | /api/revenue          | Get revenue analytics   |
| GET    | /api/stats            | Get dashboard stats     |

---

## 🎨 UI FEATURES (based on Parkware design)

- **Sidebar navigation** – Parking, Permissions, Management, Reports
- **Overview tab** – Stat cards (Total Rented, Permitted Cars, Check-in/out)
- **Area Information** – Photo, name, address, customer, type, code with Edit modal
- **Parking Details** – Donut chart showing rented vs remaining
- **Revenue Analytics** – Bar chart with Sales vs Expenses
- **Fines** – Donut chart (Approved / Pending / Rejected)
- **Parking Plots tab** – Full CRUD table (Add / Edit / Delete)
- **Violations tab** – Report and list violations
- **Economy tab** – Revenue line chart
- **Search** – Live filter across all tables
- **Toast notifications** – Feedback on every action

---

## 🐛 COMMON ISSUES

**"ModuleNotFoundError: No module named 'flask'"**
→ Run: `pip install flask flask-cors mysql-connector-python`

**"Access denied for user 'root'"**
→ Wrong `MYSQL_USER` / `MYSQL_PASSWORD` environment variable

**"Can't connect to MySQL server"**
→ MySQL service not running → Start it:
  - Windows: Services → MySQL → Start
  - Mac: `brew services start mysql`
  - Linux: `sudo systemctl start mysql`

**CORS error in browser console**
→ Backend not running → Start `python app.py` first

---

## 📦 Technologies Used

| Layer    | Technology            |
|----------|-----------------------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Charts   | Chart.js (CDN)        |
| Backend  | Python + Flask        |
| Database | MySQL 8.0             |
| API      | REST (JSON)           |

---

Made for DBMS Project – Parking Lot Management System
