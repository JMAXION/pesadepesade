-- Active: 1717570319714@@127.0.0.1@3306@hrdb2019

USE myshop2019;
SELECT DATABASE();

 select user_pass from pesade_member where user_id ='blue10' and user_pass = 'blue10@@';
 select * from pesade_member where user_id = 'blue10';

select * from pesade_member;
  delete  from pesade_member where user_id = 'a123'
 
  UPDATE pesade_member
      SET user_pass = '', 
          user_name = '', 
          zipcode = '11111', 
          address = '', 
          phone = '',
          email = '', 
          gender = '', 
          bdate_type = '', 
          bdate = ''
      WHERE user_id = 'test5'



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

select * from pesade_member;

-- 이메일 인증 테이블
CREATE TABLE email_verification (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    code VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES pesade_member(user_id) ON DELETE CASCADE
);




