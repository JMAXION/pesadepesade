-- 쿠폰 테이블
CREATE TABLE pesade_coupon (
    coupon_id INT AUTO_INCREMENT PRIMARY KEY, -- 쿠폰 번호
    coupon_name VARCHAR(50), -- 쿠폰 이름
    discount INT, -- 할인 금액
    valid_from DATE, -- 발행 날짜
    valid_until DATE -- 유효 날짜
);
drop table pesade_coupon;
-- 회원 쿠폰 테이블
CREATE TABLE pesade_member_coupon (
    user_id VARCHAR(50), -- 사용자 아이디
    coupon_id INT, -- 쿠폰 번호
    PRIMARY KEY (user_id, coupon_id),
    CONSTRAINT fk_member_coupon_user FOREIGN KEY (user_id) REFERENCES pesade_member(user_id),
    CONSTRAINT fk_member_coupon_coupon FOREIGN KEY (coupon_id) REFERENCES pesade_coupon(coupon_id)
);
drop table pesade_member_coupon;