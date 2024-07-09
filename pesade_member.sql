CREATE TABLE pesade_member (
    user_id VARCHAR(50) PRIMARY KEY, -- 사용자 아이디
    user_pass VARCHAR(255) NOT NULL, -- 사용자 비밀번호
    user_name VARCHAR(50) NOT NULL, -- 사용자 이름
    zipcode CHAR(5), -- 우편번호
    address VARCHAR(50), -- 주소
    phone CHAR(50) NOT NULL, -- 전화번호
    email VARCHAR(255) NOT NULL, -- 이메일
    gender ENUM('male', 'female'), -- 성별
    bdate_type ENUM('solar', 'lunar'),  -- 생년월일 유형
    bdate VARCHAR(50), -- 생년월일
    signup_date DATETIME -- 회원가입 날짜
);

-- 회원 테이블
CREATE TABLE pesade_member (
    user_id VARCHAR(50) PRIMARY KEY, -- 사용자 아이디
    user_pass VARCHAR(255) NOT NULL, -- 사용자 비밀번호
    user_name VARCHAR(50) NOT NULL, -- 사용자 이름
    zipcode CHAR(5), -- 우편번호
    address VARCHAR(50), -- 주소
    phone CHAR(50) NOT NULL, -- 전화번호
    email VARCHAR(255) NOT NULL, -- 이메일
    gender VARCHAR(50), -- 성별
    bdate_type VARCHAR(50),  -- 생년월일 유형
    bdate VARCHAR(50), -- 생년월일
    signup_date DATETIME -- 회원가입 날짜
);

use myshop2019;
drop table pesade_member;