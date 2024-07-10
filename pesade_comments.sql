use myshop2019;
CREATE TABLE pesade_comments (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  qid INT,
  user_id     VARCHAR(30) NOT NULL,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (qid) REFERENCES pesade_qboard(qid),
  CONSTRAINT fk_pesade_comments_user_id FOREIGN KEY (user_id) REFERENCES pesade_member(USER_ID)

);