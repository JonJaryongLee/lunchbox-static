CREATE TABLE `menu` (
  `menu_id` INT NOT NULL AUTO_INCREMENT,
  `menu_day` TEXT NOT NULL,
  `menu_name` VARCHAR(20) NOT NULL,
  `description` TEXT NOT NULL,
  `image_link` TEXT NOT NULL,
  PRIMARY KEY (`menu_id`)
);

INSERT INTO `menu`
(`menu_day`, `menu_name`, `description`, `image_link`)
VALUES
('내일', '특제 바몬드카레', '진짜 사과즙과 꿀을 넣었다구!', '/images/menu/japanese-curry.jpg'),
('모레', '해물 스파게티', '새우는 언제나 옳다... 홍합은 뺐어.', '/images/menu/shrimp-spaghetti.jpg'),
('3일 뒤', '샌드위치', '치즈, 양상추, 베이컨, 토마토가 들어갔다구!', '/images/menu/sandwich.jpg');