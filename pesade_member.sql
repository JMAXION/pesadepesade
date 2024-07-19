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

use myshop2019;

select user_id, user_pass, user_name, zipcode, address, phone, email, gender, bdate_type, bdate from pesade_member where user_pass = ;

drop table pesade_member;

CREATE TABLE pesade_qboard (
qid         INT AUTO_INCREMENT PRIMARY KEY,
qtitle      VARCHAR(50) NOT NULL,
user_id     VARCHAR(50) NOT NULL,
qcontent    VARCHAR(500) NOT NULL,
qhits       INT,
qpassword   CHAR(4),
qdate       DATETIME,
is_secret   BOOLEAN NOT NULL DEFAULT FALSE,
filePath    VARCHAR(300),
CONSTRAINT fk_pesade_qboard_user_id FOREIGN KEY (user_id) REFERENCES pesade_member(user_id)
);
CREATE TABLE pesade_nboard (
nid         INT AUTO_INCREMENT PRIMARY KEY,
ntitle      VARCHAR(50) NOT NULL,
user_id     VARCHAR(50) NOT NULL,
ncontent    VARCHAR(500) NOT NULL,
nhits       INT,
ndate       DATETIME,

CONSTRAINT fk_pesade_nboard_user_id FOREIGN KEY (user_id) REFERENCES pesade_member(user_id)
);

CREATE TABLE pesade_comments (
comment_id INT AUTO_INCREMENT PRIMARY KEY,
qid INT,
user_id VARCHAR(50) NOT NULL,
comment_text TEXT NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT pesade_comments_fk_1 FOREIGN KEY (qid)
REFERENCES pesade_qboard (qid)
ON DELETE CASCADE,
CONSTRAINT pesade_comments_fk_2 FOREIGN KEY (user_id)
REFERENCES pesade_member (user_id)
ON DELETE CASCADE
);