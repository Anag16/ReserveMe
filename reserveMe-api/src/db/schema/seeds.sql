INSERT INTO users
(email, password, phone, fullname, user_type)
VALUES
('user1@email.com', '111-1111', 'User1 Name1', false),
('user2@email.com', '222-2222', 'User2 Name2', false),
('admin@email.com', '000-0000', 'Admin Astrator', true);

INSERT INTO reservations
(reservation_date, start_time, end_time, user_id, store_id)
VALUES
('12-25-2021', '12:00PM', '1:00PM', 1, 1),
('12-31-2021', '2:00PM', '3:00PM', 1, 2),
('2-14-2022,' '11:00AM', '1:00PM', 3, 3),
('01-01-2022', '11:00PM', '12:00AM', 2, 4),
('07-01-2022', '6:00PM', '7:00PM', 3, 5);

INSERT INTO stores
(name, location, capacity, safety_measures, dates, opening_hour, closing_hour, admin_id)
VALUES
('store1', 'location1', 10, 'mask required', '10-31-2021', '8:00AM', '7:00PM', 3),
('store2', 'location2', 20, 'no mask encouraged', '02-14-2022', '9:00AM', '6:00PM', 3),
('store3', 'location3', 30, 'one vaccine required', '12-31-2021', '10:00AM', '5:00PM', 3),
('store4', 'location4', 40, 'two vaccine required', '07-01-2022', '11:00AM', '4:00PM', 3),
('store5', 'location5', 50, 'free-for-all', '12-25-2021', '12:00PM', '3:00PM', 3);