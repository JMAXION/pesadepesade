-- 장바구니 테이블
CREATE TABLE pesade_cart (
    cid INT AUTO_INCREMENT PRIMARY KEY, -- 카트 아이디
    user_id VARCHAR(50), -- 사용자 아이디
    pid INT, -- 상품 아이디
    qty INT, -- 수량
    pgid INT, -- 기프트 아이디
    cdate DATETIME, -- 장바구니 날짜
    CONSTRAINT fk_cart_user FOREIGN KEY (user_id) REFERENCES pesade_member(user_id),
    CONSTRAINT fk_cart_product FOREIGN KEY (pid) REFERENCES pesade_product(pid),
    CONSTRAINT fk_cart_gift FOREIGN KEY (pgid) REFERENCES pesade_gift_option(pgid)
);
drop table pesade_cart;