CREATE TABLE pesade_nboard (
    nid         INT AUTO_INCREMENT PRIMARY KEY,
    ntitle      VARCHAR(50) NOT NULL,
    user_id     VARCHAR(30) NOT NULL,
    ncontent    VARCHAR(500) NOT NULL,
    nhits       INT,
    ndate       DATETIME,
    
    CONSTRAINT fk_pesade_nboard_user_id FOREIGN KEY (user_id) REFERENCES pesade_member(USER_ID)
);
CREATE TABLE pesade_qboard (
    qid         INT AUTO_INCREMENT PRIMARY KEY,
    qtitle      VARCHAR(50) NOT NULL,
    user_id     VARCHAR(30) NOT NULL,
    qcontent    VARCHAR(500) NOT NULL,
    qhits       INT,
    qpassword   CHAR(4),
    qdate       DATETIME,
    is_secret   BOOLEAN NOT NULL DEFAULT FALSE, — 비밀글 여부 (기본값: 공개글)
    
    CONSTRAINT fk_pesade_qboard_user_id FOREIGN KEY (user_id) REFERENCES pesade_member(USER_ID)
);