DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stores CASCADE;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE stores (
  store_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  location VARCHAR(255) NOT NULL,
  capacity INTEGER NOT NULL,
  customer_count INTEGER NOT NULL,
  reservation_capacity INTEGER NOT NULL,
  safety_measures TEXT,
  opening_hour INTEGER NOT NULL,
  closing_hour INTEGER NOT NULL,
  admin_id INTEGER NOT NULL
);

CREATE TABLE reservations (
  reservation_id SERIAL PRIMARY KEY NOT NULL,
  reservation_date DATE NOT NULL,
  start_hour INTEGER NOT NULL,
  start_minutes INTEGER NOT NULL,
  end_hour INTEGER NOT NULL,
  end_minutes INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  store_id INTEGER REFERENCES stores(store_id) ON DELETE CASCADE
);

