DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS stores CASCADE;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  user_type VARCHAR(255) NOT NULL
);

CREATE TABLE reservations (
  reservation_id SERIAL PRIMARY KEY NOT NULL,
  reservation_date DATE NOT NULL,
  start_time VARCHAR(255) NOT NULL,
  end_time VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  store_id VARCHAR(255) NOT NULL
);

CREATE TABLE stores (
  store_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  location VARCHAR(255) NOT NULL,
  capacity VARCHAR(255) NOT NULL,
  safety_measures VARCHAR(255) NOT NULL,
  dates VARCHAR(255) NOT NULL,
  opening_hour VARCHAR(255) NOT NULL,
  closing_hour VARCHAR(255) NOT NULL,
  admin_id VARCHAR(255) NOT NULL
);

