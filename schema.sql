-- schema.sql

drop database if exists CN_demo;

create database CN_demo;

use CN_demo;

grant select, insert, update, delete on CN_demo.* to 'www-data'@'localhost' identified by 'www-data';

create table users (
    `id` varchar(50) not null,
    `email` varchar(50) not null,
    `passwd` varchar(50) not null,
    `admin` bool not null,
    `name` varchar(50) not null,
    `image` varchar(500) not null,
    `created_at` real not null,
    unique key `idx_email` (`email`),
    key `idx_created_at` (`created_at`),
    primary key (`id`)
) engine=innodb default charset=utf8;


LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0014984602207973c3bd6fa77c84c17bd75c0e566a44553000','yaowy@tju.edu.cn','3abc28aa3435dc5e49ac479d62ee8943e54bcd25',1,'姚唯一','about://blank',1498460220.79789);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;


