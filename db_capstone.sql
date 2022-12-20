/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `binh_luan` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(255) DEFAULT NULL,
  `duong_dan` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` datetime DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `ho_ten` varchar(255) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(2, 1, '2022-09-01 09:02:00', 'không cảm xúc');
INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(2, 2, '2022-03-01 09:33:00', 'no comment');
INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(3, 1, '2022-11-06 09:34:00', 'cũng tạm');
INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(3, 2, '2022-06-05 09:41:00', 'không đẹp'),
(4, 2, '2022-03-03 09:52:00', 'miễn bình luận');

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `tuoi`, `nguoi_dung_id`) VALUES
(1, 'ảnh bầu trời', 'https://i.pinimg.com/564x/3d/04/a9/3d04a9fefe65096716e5cfe0f8e54e05.jpg', 'ảnh xấu nha', 22, 4);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `tuoi`, `nguoi_dung_id`) VALUES
(2, 'ảnh hoàng hôn', 'https://i.pinimg.com/564x/55/03/51/550351e8f061b228b52b55dec69dbfaa.jpg', 'ảnh đẹp', 33, 3);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `tuoi`, `nguoi_dung_id`) VALUES
(3, 'ảnh bầu trời', 'https://i.pinimg.com/564x/3d/04/a9/3d04a9fefe65096716e5cfe0f8e54e05.jpg', 'ảnh xấu nha', 22, 1);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `tuoi`, `nguoi_dung_id`) VALUES
(4, 'ảnh captain', 'https://i.pinimg.com/564x/6f/b5/9a/6fb59a34b163b3fa905a054f8cdc8ccc.jpg', 'ảnh vip á', 39, 5),
(5, 'ảnh thor', 'https://i.pinimg.com/564x/69/8d/ff/698dffaa19a442a23b65bb1d67c22c8e.jpg', 'nhìn hơi ngầu nha', 83, 1),
(11, 'ảnh bầu trời', 'https://i.pinimg.com/564x/3d/04/a9/3d04a9fefe65096716e5cfe0f8e54e05.jpg', 'ảnh xấu nha', 22, 4),
(13, 'ảnh siêu nhân', 'https://i.pinimg.com/564x/09/99/3f/09993fda4176327302f53f87b4a49d2c.jpg', 'ảnh bình thường', 54, 2),
(14, 'ảnh captain', 'https://i.pinimg.com/564x/6f/b5/9a/6fb59a34b163b3fa905a054f8cdc8ccc.jpg', 'ảnh vip á', 39, 5),
(15, 'ảnh thor', 'https://i.pinimg.com/564x/69/8d/ff/698dffaa19a442a23b65bb1d67c22c8e.jpg', 'nhìn hơi ngầu nha', 83, 1);

INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 5, '2022-03-01 09:33:00');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(2, 5, '2022-09-01 09:02:00');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(3, 2, '2022-06-05 09:41:00');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(4, 1, '2022-11-06 09:34:00'),
(5, 2, '2022-03-03 09:52:00');

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1, 'tomas@gmail.com', '1234', 'tomas', 22, '');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(2, 'anna@gmail.com', '1234', 'anna', 33, '');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(3, 'khoinguyen@gmail.com', '1234', 'khoinguyen', 54, '');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(4, 'dangkhoi@gmail.com', '1234', 'dangkhoi', 39, ''),
(5, 'thor@gmail.com', '1234', 'thor', 83, ''),
(7, 'tooo@gmail.com', '1234', 'abc', 33, ''),
(8, 'khoine@gmail.com', '$2b$10$jrI2tV.D.02KlcYe6oo2mu53ewP9s6gTQFI3gM3NTimQA5uoefTXi', 'khoine', 23, ''),
(9, 'khoine2@gmail.com', '$2b$10$dOyFgbDnm3DEaM1qPjtEZOW5H8ZZ4cVoLMjLjOL7QfwNHs4gR7CEC', 'khoine', 23, ''),
(10, NULL, NULL, NULL, NULL, 'abc'),
(11, 'khoine2@gmail.com', '$2b$10$5uMEsACLMYOdj0za6HoJTeopgpZeGNU0ekc8nGD8LBl4XR5d/Mtti', 'khoine1', 232, 'a1111'),
(12, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(13, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(14, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(15, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(16, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(17, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(18, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(19, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU'),
(20, NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnGhw7dMpkAXTwE1torB-VWYmhIUU8VCqow&usqp=CAU');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;