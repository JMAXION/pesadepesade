-- 게시판 테이블
CREATE TABLE pesade_board (
    bid INT AUTO_INCREMENT PRIMARY KEY, -- 게시물 아이디
    btitle VARCHAR(255), -- 게시물 제목
    bcontent TEXT, -- 게시물 내용
    bhits INT DEFAULT 0, -- 게시물 조회수
    bdate DATETIME, -- 게시물 작성일자
    bwriter VARCHAR(50), -- 작성자
    CONSTRAINT fk_board_writer FOREIGN KEY (bwriter) REFERENCES pesade_member(user_id)
);
drop table pesade_board;