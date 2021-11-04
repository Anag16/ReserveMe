INSERT INTO users
(email, password, phone, name, is_admin)
VALUES
('user1@email.com', '123', '111-1111', 'User1 Name1', false),
('user2@email.com', '123', '222-2222', 'User2', false),
('admin@email.com', '123', '000-0000', 'Admin Astrator', true),
('admin2@admin.com', '123', '888-8888', 'Ad Ministrator', true),
('admin3@admin.com', '123', '888-8888', 'Another Admin', true);

INSERT INTO admins
(user_id)
VALUES
(3),
(4),
(5);

INSERT INTO stores
(name, description, image, location, capacity, customer_count, reservation_capacity, safety_measures, opening_hour, closing_hour, admin_id)
VALUES
('Walmart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est.', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1209106512%2FDaily-Life-During-Coronavirus-Epidemic-In-Toronto%2F960x0.jpg%3Ffit%3Dscale', '3757 Keele St, Toronto, ON', 50, 24, 40, 'mask required', 7, 22, 3),
('Zara', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur. Donec in justo nibh.', 'https://www.retail4growth.com/public/uploads/editor/2020-09-02/1599025250.jpg', 'Yorkdale Centre, 3401, Dufferin Street, M6A 2T9', 20, 10, 5, 'mask encouraged', 10, 20, 3),
('Home Depot', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur enim eu ante tristique molestie. Ut sit amet nisl pulvinar, pulvinar neque id, lacinia est. Ut dolor ex, tincidunt finibus nisl eget, pulvinar venenatis mi. Aliquam pharetra vulputate consectetur.','https://i.cbc.ca/1.3942287.1484794922!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/home-depot.jpg', '50 Red Maple Road, Richmond Hill, ON L4B 4K1', 30, 15, 15, 'one vaccine required', 6, 21, 3),
('Michaels Kors', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.','https://images.businessoffashion.com/site/uploads/2017/11/shutterstock_495261979.jpg?auto=format%2Ccompress&crop=top&fit=crop&h=426&w=764', '13850 Steeles Ave, 503 Halton Hills, ON L7G 5G2', 40, 15, 20, 'two vaccine required', 10, 20, 3),
('Pet Smart', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://i.insider.com/5ba41783ea4002250a8b4567?width=1300&format=jpeg&auto=webp', '7575 Weston Road, Vaughan, ON L6A 1T1', 1, 0, 1, 'masks required, vaccine passport required', 9, 21, 3),
('Aldo', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/ALDOHillcrestMall.jpg/2560px-ALDOHillcrestMall.jpg', '9350 Yonge St, Richmond Hill, ON L4C 5G2', 30, 18, 25, 'mask required', 10, 20, 3),
('Staples', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://media.blogto.com/articles/20181211-staples-new.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70', '9350 Yonge St, Richmond Hill, ON L4C 5G2', 40, 26, 35, 'mask required, at least one vaccine required', 9, 21, 3),
('Shoppers Drug Mart', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://beta.ctvnews.ca/local/toronto/2020/8/24/1_5077198/_jcr_content/root/responsivegrid/image.coreimg.jpeg/1598360988363/1-4965696.jpeg', '51 Underhill Dr, North York, ON M3A 2J8', 40, 13, 35, 'mask required, two vaccines required', 9, 21, 3),
('Toys R Us', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1147,w_2047,x_0,y_209/v1623262439/shape/mentalfloss/647308-flickr-1.jpg?itok=W4tofLKC', '2300 Yonge St, Toronto, ON M4P 1E4', 25, 8, 20, 'at least one vaccine required', 10, 21, 3),
('Best Buy', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://cdn.mobilesyrup.com/wp-content/uploads/2017/08/best-buy-header.jpg', '695 Wilson Ave, Toronto, ON M3K 1E3', 50, 38, 40, 'vaccine passport required', 11, 19, 3),
('Indigo Books & Music', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'http://media.shelf-awareness.com/theshelf/2017EditContent/indigo_yorkdale_mall_toronto_via_wikipedia_110517.jpg', '2300 Yonge St, Toronto, ON M4P 1E4', 30, 12, 20, 'masks and two vaccines required', 10, 19, 3),
('Canadian Tire', 'Lorem ipsum aliquam vel magna non nulla elementum consectetur a scelerisque orci. Sed eleifend ante lorem, a fermentum ligula commodo sit amet.', 'https://obj.ca/sites/default/files/styles/article_main/public/2019-08/iStock-459396541.jpg?itok=Xe6xkXcZ', '2850 Kingston Rd, Scarborough, ON M1M 1M7', 45, 18, 30, 'masks and two vaccines required', 9, 20, 3);

INSERT INTO reservations
(reservation_date, start_hour, start_minutes, end_hour, end_minutes, user_id, store_id)
VALUES
('2021-12-25', 12, 0, 13, 0, 1, 1),
('2021-06-13', 14, 0, 15, 0, 1, 2),
('2023-12-05', 11, 0, 13, 0, 3, 3),
('2021-12-05', 11, 0, 12, 0, 2, 4),
('2025-12-05', 18, 0, 19, 0, 3, 5);
