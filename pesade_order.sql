-- 주문 테이블
CREATE TABLE pesade_order (
    oid VARCHAR(30) PRIMARY KEY, -- 주문 번호
    user_id VARCHAR(50), -- 사용자 아이디
    total_price INT, -- 총 주문 금액
    odate DATETIME, -- 주문 날짜
    CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES pesade_member(user_id)
);
drop table pesade_order;

-- 주문 상세 테이블


CREATE TABLE pesade_order_detail (
    od_id INT AUTO_INCREMENT PRIMARY KEY, -- 주문 상세 아이디
    oid VARCHAR(30), -- 주문 번호
    pid INT, -- 상품 아이디
    qty INT, -- 수량
    pprice INT, -- 상품 가격
    CONSTRAINT fk_order_detail_order FOREIGN KEY (oid) REFERENCES pesade_order(oid),
    CONSTRAINT fk_order_detail_product FOREIGN KEY (pid) REFERENCES pesade_product(pid)
);