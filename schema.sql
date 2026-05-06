-- ──────────────────────────────────────────────────────────
--  ParkWare – Parking Lot Management System
--  MySQL Schema
-- ──────────────────────────────────────────────────────────

CREATE DATABASE IF NOT EXISTS parking_db;
USE parking_db;

-- ── PARKING AREAS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS parking_areas (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    area_name    VARCHAR(150) NOT NULL,
    customer     VARCHAR(150),
    address      VARCHAR(300),
    type         ENUM('Normal','Premium','Handicap') DEFAULT 'Normal',
    parking_code VARCHAR(20),
    areas        VARCHAR(200),
    image_url    VARCHAR(500),
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ── PARKING PLOTS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS parking_plots (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    area_id   INT,
    number    VARCHAR(20) NOT NULL,
    status    ENUM('Available','Occupied','Reserved') DEFAULT 'Available',
    vehicle   VARCHAR(50),
    checkin   DATETIME,
    checkout  DATETIME,
    FOREIGN KEY (area_id) REFERENCES parking_areas(id)
);

-- ── VIOLATIONS / FINES ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS violations (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    area_id     INT,
    vehicle     VARCHAR(50) NOT NULL,
    type        VARCHAR(100),
    date        DATE NOT NULL,
    fine_amount DECIMAL(10,2),
    status      ENUM('Pending','Approved','Rejected') DEFAULT 'Pending',
    notes       TEXT,
    FOREIGN KEY (area_id) REFERENCES parking_areas(id)
);

-- ── TRANSACTIONS (Revenue) ───────────────────────────────────
CREATE TABLE IF NOT EXISTS transactions (
    id      INT AUTO_INCREMENT PRIMARY KEY,
    area_id INT,
    date    DATE NOT NULL,
    amount  DECIMAL(10,2),
    expense DECIMAL(10,2),
    note    VARCHAR(255),
    FOREIGN KEY (area_id) REFERENCES parking_areas(id)
);

-- ── BOOKINGS ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookings (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    plot_id      INT,
    customer     VARCHAR(150),
    vehicle      VARCHAR(50),
    start_time   DATETIME,
    end_time     DATETIME,
    status       ENUM('Active','Completed','Cancelled') DEFAULT 'Active',
    FOREIGN KEY (plot_id) REFERENCES parking_plots(id)
);

-- ── SAMPLE DATA ──────────────────────────────────────────────
INSERT INTO parking_areas (area_name, customer, address, type, parking_code, areas)
VALUES ('2 timer parkering','Patricia Winther','Jernbanevej 31, 3400 Holbeak','Normal','100410','Tranehavegård - Plads');

INSERT INTO parking_plots (area_id, number, status, vehicle, checkin, checkout) VALUES
(1, 'A-01', 'Occupied', 'KA-01-AB-1234', '2024-02-02 09:00:00', '2024-02-02 11:00:00'),
(1, 'A-02', 'Available', NULL, NULL, NULL),
(1, 'B-01', 'Reserved', 'KA-02-CD-5678', '2024-02-02 10:00:00', '2024-02-02 14:00:00'),
(1, 'B-02', 'Available', NULL, NULL, NULL),
(1, 'C-01', 'Occupied', 'KA-03-EF-9012', '2024-02-02 08:30:00', '2024-02-02 12:30:00');

INSERT INTO violations (area_id, vehicle, type, date, fine_amount, status) VALUES
(1, 'KA-03-EF-9012', 'No Permit',     '2024-02-01', 150.00, 'Pending'),
(1, 'KA-04-GH-3456', 'Overtime',      '2024-01-30', 75.00,  'Approved'),
(1, 'KA-05-IJ-7890', 'Wrong Zone',    '2024-01-28', 100.00, 'Rejected');

INSERT INTO transactions (area_id, date, amount, expense, note) VALUES
(1, '2024-01-01', 8000.00, 3200.00, 'January'),
(1, '2024-02-01', 9500.00, 4100.00, 'February');
