CREATE TABLE `person` (
  `user_id` VARCHAR(20) NOT NULL,
  `password` TEXT NOT NULL,
  `default_address` TEXT NOT NULL,
  `default_request` TEXT,
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `menu` (
  `menu_id` INT NOT NULL AUTO_INCREMENT,
  `menu_day` TEXT NOT NULL,
  `menu_name` VARCHAR(20) NOT NULL,
  `description` TEXT NOT NULL,
  `image_link` TEXT NOT NULL,
  PRIMARY KEY (`menu_id`)
);

CREATE TABLE `ordered` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` TEXT NOT NULL,
  `menu_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `address` TEXT NOT NULL,
  `what_time` TEXT NOT NULL,
  `etc` TEXT,
  `order_time` TIMESTAMP DEFAULT now(),
  PRIMARY KEY (`order_id`)
);

INSERT INTO `person`
(`user_id`, `password`, `default_address`, `default_request`)
VALUES
('assistant0603', 'aa123123', '서울시 동작구 노량진동', '당근 빼주세요'),
('joayo55', 'joajoa77', '제주시 애월읍', NULL),
('sujin88', 'sususu789', '대전시 중구 은행동', '안 맵게 해주세요');

INSERT INTO `menu`
(`menu_day`, `menu_name`, `description`, `image_link`)
VALUES
('내일', '특제 바몬드카레', '진짜 사과즙과 꿀을 넣었다구!', '/images/menu/japanese-curry.jpg'),
('모레', '해물 스파게티', '새우는 언제나 옳다... 홍합은 뺐어.', '/images/menu/shrimp-spaghetti.jpg'),
('3일 뒤', '샌드위치', '치즈, 양상추, 베이컨, 토마토가 들어갔다구!', '/images/menu/sandwich.jpg');

INSERT INTO `ordered` 
(`user_id`, `menu_id`, `quantity`, `address`, `what_time`, `etc`)
VALUES
('joayo55', 1, 3, '제주시 애월읍', '12:00PM', NULL),
('joayo55', 2, 2, '부산시 해운대구 우동', '1:00PM', '시간 맞춰서 와주세요'),
('assistant0603', 2, 2, '서울시 동작구 노량진동', '12:00PM', '조심히 안전하게 와주세요');
