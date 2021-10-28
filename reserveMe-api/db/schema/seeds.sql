INSERT INTO users
(email, password, phone, fullname, user_type)
VALUES
('user1@email.com', 'password', '111-1111', 'User1 Name1', 'client'),
('user2@email.com', 'password', '222-2222', 'User2 Name2', 'client'),
('admin@email.com', 'password', '000-0000', 'Admin Astrator', 'admin');

INSERT INTO reservations
(reservation_date, start_time, end_time, user_id, store_id)
VALUES
('12-25-2021', '12:00PM', '1:00PM', 1, 1),
('12-31-2021', '2:00PM', '3:00PM', 1, 2),
('2-14-2022', '11:00AM', '1:00PM', 3, 3),
('01-01-2022', '11:00PM', '12:00AM', 2, 4),
('07-01-2022', '6:00PM', '7:00PM', 3, 5);

INSERT INTO stores
(name, description, image, location, capacity, safety_measures, dates, opening_hour, closing_hour, admin_id)
VALUES
('Walmart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://media.blogto.com/articles/20170204-2048-TheBigCarrot22.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70','3757 Keele St, Toronto, ON', 10, 'mask required', '10-31-2021', '8:00AM', '7:00PM', 3),
('Zara', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://media.blogto.com/articles/20170204-2048-TheBigCarrot22.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70','Yorkdale Centre, 3401, Dufferin Street, M6A 2T9', 20, 'no mask encouraged', '02-14-2022', '9:00AM', '6:00PM', 3),
('Home Depot', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://media.blogto.com/articles/20170204-2048-TheBigCarrot22.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70','50 Red Maple Road, Richmond Hill, ON L4B 4K1', 30, 'one vaccine required', '12-31-2021', '10:00AM', '5:00PM', 3),
('Michaels Kors', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://media.blogto.com/articles/20170204-2048-TheBigCarrot22.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70','13850 Steeles Ave, 503 Halton Hills, ON L7G 5G2', 40, 'two vaccine required', '07-01-2022', '11:00AM', '4:00PM', 3),
('Pet Smart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://media.blogto.com/articles/20170204-2048-TheBigCarrot22.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70','7575 Weston Road, Vaughan, ON L6A 1T1', 50, 'free-for-all', '12-25-2021', '12:00PM', '3:00PM', 3);
