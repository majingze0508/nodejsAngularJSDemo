SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`
	(`bId`	INT(8) NOT NULL AUTO_INCREMENT,
	`ISBN`		varchar(255) NOT NULL,
	`title` 		varchar (30) NOT NULL,
	`author`	varchar (30) NOT NULL,
	`publisher`	varchar(255) NOT NULL,
	`category`	varchar (4) NOT NULL,
	`price` DOUBLE (8, 3) NOT NULL,
	`quantity` INT(8) NOT NULL,
	`history` varchar(500),
	PRIMARY KEY (`bId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'test', 'Pa55word', 'admin');
INSERT INTO `book` VALUES ('1', '123456', 'testbook1', 'author1', 'publisher1', 'SE', '25.5', '10', '');
INSERT INTO `book` VALUES ('2', '123457', 'testbook2', 'author2', 'publisher2', 'SE', '25.6', '10', '');
INSERT INTO `book` VALUES ('3', '123458', 'testbook3', 'author3', 'publisher3', 'SE', '25.7', '10', '');
