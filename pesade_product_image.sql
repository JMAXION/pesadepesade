-- 상품 이미지 테이블
CREATE TABLE pesade_product_image (
    img_id INT AUTO_INCREMENT PRIMARY KEY, -- 이미지 아이디
    pid INT, -- 상품 아이디
    img_url VARCHAR(255) NOT NULL, -- 이미지 URL
    img_type ENUM('main', 'detail') NOT NULL, -- 이미지 유형 (대표 이미지, 상세 이미지)
    img_order INT NOT NULL, -- 이미지 순서
    CONSTRAINT fk_product_image FOREIGN KEY (pid) REFERENCES pesade_product(pid)
);
drop table pesade_product_image;
