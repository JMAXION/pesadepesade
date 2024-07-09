CREATE TABLE pesade_category (
    category_id INT AUTO_INCREMENT PRIMARY KEY, -- 카테고리 아이디
    category_name VARCHAR(100) NOT NULL -- 카테고리 이름
);
drop table pesade_category;
insert into pesade_category (category_name) values 
('Le Labo'),
('Diptyque');