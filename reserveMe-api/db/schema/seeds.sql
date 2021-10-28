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
('Walmart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1209106512%2FDaily-Life-During-Coronavirus-Epidemic-In-Toronto%2F960x0.jpg%3Ffit%3Dscale','3757 Keele St, Toronto, ON', 10, 'mask required', '10-31-2021', '8:00AM', '7:00PM', 3),
('Zara', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://www.retail4growth.com/public/uploads/editor/2020-09-02/1599025250.jpg','Yorkdale Centre, 3401, Dufferin Street, M6A 2T9', 20, 'no mask encouraged', '02-14-2022', '9:00AM', '6:00PM', 3),
('Home Depot', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://i.cbc.ca/1.3942287.1484794922!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/home-depot.jpg','50 Red Maple Road, Richmond Hill, ON L4B 4K1', 30, 'one vaccine required', '12-31-2021', '10:00AM', '5:00PM', 3),
('Michaels Kors', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://images.businessoffashion.com/site/uploads/2017/11/shutterstock_495261979.jpg?auto=format%2Ccompress&crop=top&fit=crop&h=426&w=764','13850 Steeles Ave, 503 Halton Hills, ON L7G 5G2', 40, 'two vaccine required', '07-01-2022', '11:00AM', '4:00PM', 3),
('Pet Smart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh. Vivamus condimentum fermentum dapibus. Donec eget quam nibh. In rutrum porta varius. Aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.','https://i.insider.com/5ba41783ea4002250a8b4567?width=1300&format=jpeg&auto=webp','7575 Weston Road, Vaughan, ON L6A 1T1', 50, 'free-for-all', '12-25-2021', '12:00PM', '3:00PM', 3);
