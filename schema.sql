-- SQLite Offline DB
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
price REAL NOT NULL,
stock INTEGER DEFAULT 0
);

INSERT INTO products
(name, price, stock)
VALUES
('Keyboard', 89.99, 45),
('Mouse', 49.50, 80),
('USB Hub', 29.95, 120),
('Headset', 149.00, 25);

SELECT id, name, price, stock
FROM products;
