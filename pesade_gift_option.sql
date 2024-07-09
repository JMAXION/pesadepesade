-- 기프트 옵션 테이블
CREATE TABLE pesade_gift_option (
    pgid INT AUTO_INCREMENT PRIMARY KEY, -- 기프트 아이디
    gift_option VARCHAR(50) NOT NULL -- 기프트 옵션
);
drop table pesade_gift_option;
-- 초기 기프트 옵션 데이터 삽입
INSERT INTO pesade_gift_option (gift_option) VALUES
('#선택안함'),
('#danke'),
('#lovelovelove'),
('#congratulations'),
('#happy birthday');