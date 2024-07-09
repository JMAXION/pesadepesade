use myshop2019;

drop table if exists product_table;

create table product_table(
    pid INT primary key auto_increment,
    pname VARCHAR(100),
    pdetail VARCHAR(100),
    pscentdetail VARCHAR(100),
    pdesc VARCHAR(500),
    pprice INT,
    pinfo1 VARCHAR(300),
    pinfo2 TEXT(1000),
    pnotice VARCHAR(200),
    pimage VARCHAR(300),
    pdetailimage VARCHAR(300),
    category VARCHAR(100)
);

insert into product_table(pname, pdetail, pscentdetail, pdesc, pprice, pinfo1, pinfo2, pnotice, pimage, pdetailimage,category) values (
    'An Unseen',
    'Parfum 100ml',
    'Glass House l Floral & Pure Musk l Ideal',
    '꽃과 나무 향 주변으로\n순수하게 투영되는 네롤리는 차분하지만, 싱그러운 시작을 알린다.\n포근한 머스크에서 다가오는 섬세함이 눈부시게 빛나며 오감을 매료시키는 향.',
    195000,
    '전성분 변성알코올, 향료, 정제수, 피이지-40하이드로제네이티드캐스터오일, 제라니올, 리모넨, 리날룰, 시트랄',
    'Info 제품명 | 페사드 언언신 퍼퓸 100ML\n용량 | 100ML / 3.4 FL.OZ\n화장품제조업자 | ㈜ 아이랩스코리아.\n화장품책임판매업자 | ㈜ 티비엘코퍼레이션.\n제조번호 및 사용기한 | 제품 별도표시.\n제조국 | 대한민국.\n사용할 때의 주의사항\n1)화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우 전문의 등과 상담할 것\n2)상처가 있는 부위 등에는 사용을 자제할 것\n3)보관 및 취급 시의 주의 사항\n가) 어린이의 손이 닿지 않는 곳에 보관할 것\n나) 직사광선을 피해서 보관할 것\n품질보증기준 : 본 제품은 공정거래 위원회 고시 소비자 분쟁해결기준에 의거 교환 또는 보상 받을 수 있습니다.\n',
    '* 교환&반품에 대한 자세한 내용은 하단 Help 페이지에서 확인 가능합니다',
    'https://pesade.kr/web/product/big/202310/820b27d819593e6ac13fb80efb6cc532.png',
    'https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/NNEditor/20240612/copy-1718166603-1.png',
    'Le Labo'
);

insert into product_table(pname, pdetail, pscentdetail, pdesc, pprice, pinfo1, pinfo2, pnotice, pimage, pdetailimage,category) values (
    'Obsession candle',
    'Pink',
    'pesade x Kwangho Lee',
    '페사드와 세계적인 공예작가 이광호의 협업으로 탄생한\n 오브젝트 캔들 컬렉션을 만나보세요.\n 나만의 공간 속에 자리하여 아름다움을 선사합니다.',
    219000,
    '주요물질\n 비즈 왁스, 향료(펜에틸 알코올 등)\n 알레르기물질\n 리날로올, 리모넨, 시트로넬, 롤, 제라니올\n 기타물질\n1,3,4,6,7,8-헥사하이드로-4,6,6,7,8,8- 헥 사메틸사이클로펜타[g]-2벤조피란',
    'Info\n 제품명 | 페사드 옵세션 오브젝트 캔들 핑크 220g\n 용량 | 220g / 7.8 FL.OZ\n 화장품제조업자 | 더라곰샵.\n 화장품책임판매업자 | ㈜ 티비엘코퍼레이션.\n 제조번호 및 사용기한 | 제품 별도표시.\n 제조국 | 대한민국.\n 안전확인대상생활화학제품 표시사항 l 신고번호 CB19-26-0586\n사용방법\n1) 긴 심지는 그을음 발생의 주요 원인이 되므로 사용 전 심지를 짧게(약5mm) 잘라 사용하십시오.\n2) 불에 타지 않는 초 받침대를 사용하십시오.\n사용할 때의 주의사항\n1) 오브젝트 캔들 특성상 제품으로부터 이염이 발생될 수 있으니 변색 및 고장, 오염의 우려가 있는 곳에서는 사용하지 마십시오.\n2) 오브젝트 캔들 특성상 약한 충격에 파손, 실내 온도에 따른 크랙 현상이 생길 수 있으니 주의해주십시오.\n3) 평평하고 안정된 표면에서 사용하십시오.\n4) 수작업으로 제작되어 표면에 기포, 매끄럽지 않은 부분이 있을 수 있으나 사용에는 문제가 없습니다.\n5) 사용 시 충분히 환기를 시켜주십시오.\n6) 직사광선이나 열기에 노출하지 마십시오.\n7) 영/유아나 애완동물에게 닿지 않는 곳에서 사용 및 보관하십시오.\n8) 피부가 민감하거나 손상된 사람은 제품을 장기간 접촉하지 않도록 주의하십시오.\n9) 취침 시나 외출 시에는 반드시 초를 끄시고 사용해주십시오.\n응급처치\n1) 사용 중 불에 화상 발생 시 응급조치 후 의사의 치료를 받으십시오.\n2) 내용물을 먹거나 삼킨 경우 응급조치를 하고 즉시 의사와 상의하십시오.\n3) 피부자극 반응 또는 붉은 반점이 나타나면 의학적 조치를 받으십시오.\n품질보증기준 : 본 제품은 공정거래 위원회 고시 소비자 분쟁해결기준에 의거 교환 또는 보상 받을 수 있습니다.',
    '* 교환&반품에 대한 자세한 내용은 하단 Help 페이지에서 확인 가능합니다',
    'https://pesade.kr/web/product/medium/202312/a82a62d75b40a6cfdf5834fef87595db.png',
    'https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/NNEditor/20240612/copy-1718166603-1.png',
    'candle'
);


select * from product_table
order by category desc;

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

USE myshop2019;

-- 현재 데이터베이스 확인
SELECT DATABASE();

-- 테이블 목록 확인
SHOW TABLES;

SHOW TABLES LIKE 'pesade%';




drop table pesade_product;

-- 회원 테이블
CREATE TABLE pesade_member (
    user_id VARCHAR(50) PRIMARY KEY, -- 사용자 아이디
    user_pass VARCHAR(255) NOT NULL, -- 사용자 비밀번호
    user_name VARCHAR(50) NOT NULL, -- 사용자 이름
    zipcode CHAR(5), -- 우편번호
    address VARCHAR(50), -- 주소
    phone CHAR(13) NOT NULL, -- 전화번호
    email VARCHAR(255), -- 이메일
    gender ENUM('M', 'F') NOT NULL, -- 성별
    bdate DATE NOT NULL, -- 생년월일
    bdate_type ENUM('양력', '음력') NOT NULL, -- 생년월일 유형
    signup_date DATETIME -- 회원가입 날짜
);

-- 카테고리 테이블
CREATE TABLE pesade_category (
    category_id INT AUTO_INCREMENT PRIMARY KEY, -- 카테고리 아이디
    category_name VARCHAR(100) NOT NULL -- 카테고리 이름
);
drop table pesade_category;
insert into pesade_category (category_name) values 
('Le Labo'),
('Diptyque');


-- 상품 테이블
CREATE TABLE pesade_product (
    pid INT AUTO_INCREMENT PRIMARY KEY, -- 상품 아이디
    pname VARCHAR(100) NOT NULL, -- 상품명
    pdetail VARCHAR(255), -- 상품 디테일
    pscentdetail VARCHAR(100), -- 상품 향 설명
    pdesc TEXT, -- 상품 설명
    pprice INT, -- 상품 가격
    category_id INT, -- 카테고리 아이디
    pinfo TEXT, -- 상품 info
    pnotice TEXT, -- 공지
    pimage VARCHAR(255), -- 대표 이미지
    CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES pesade_category(category_id)
);
select * from pesade_product;
select * from pesade_product_image;
DELETE FROM pesade_product
WHERE pid = 1;

-- 상품 이미지 테이블
CREATE TABLE pesade_product_image (
    img_id INT AUTO_INCREMENT PRIMARY KEY, -- 이미지 아이디
    pid INT, -- 상품 아이디
    img_url VARCHAR(255) NOT NULL, -- 이미지 URL
    img_type ENUM('main', 'detail') NOT NULL, -- 이미지 유형 (대표 이미지, 상세 이미지)
    img_order INT NOT NULL, -- 이미지 순서
    CONSTRAINT fk_product_image FOREIGN KEY (pid) REFERENCES pesade_product(pid)
);

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

-- 주문 테이블
CREATE TABLE pesade_order (
    oid VARCHAR(15) PRIMARY KEY, -- 주문 번호
    user_id VARCHAR(50), -- 사용자 아이디
    total_price INT, -- 총 주문 금액
    odate DATETIME, -- 주문 날짜
    CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES pesade_member(user_id)
);

-- 주문 상세 테이블
CREATE TABLE pesade_order_detail (
    od_id INT AUTO_INCREMENT PRIMARY KEY, -- 주문 상세 아이디
    oid VARCHAR(15), -- 주문 번호
    pid INT, -- 상품 아이디
    qty INT, -- 수량
    pprice INT, -- 상품 가격
    CONSTRAINT fk_order_detail_order FOREIGN KEY (oid) REFERENCES pesade_order(oid),
    CONSTRAINT fk_order_detail_product FOREIGN KEY (pid) REFERENCES pesade_product(pid)
);

-- 쿠폰 테이블
CREATE TABLE pesade_coupon (
    coupon_id INT AUTO_INCREMENT PRIMARY KEY, -- 쿠폰 번호
    coupon_name VARCHAR(50), -- 쿠폰 이름
    discount INT, -- 할인 금액
    valid_from DATE, -- 발행 날짜
    valid_until DATE -- 유효 날짜
);

-- 회원 쿠폰 테이블
CREATE TABLE pesade_member_coupon (
    user_id VARCHAR(50), -- 사용자 아이디
    coupon_id INT, -- 쿠폰 번호
    PRIMARY KEY (user_id, coupon_id),
    CONSTRAINT fk_member_coupon_user FOREIGN KEY (user_id) REFERENCES pesade_member(user_id),
    CONSTRAINT fk_member_coupon_coupon FOREIGN KEY (coupon_id) REFERENCES pesade_coupon(coupon_id)
);

CREATE TABLE pesade_nboard (
    nid         INT AUTO_INCREMENT PRIMARY KEY,
    ntitle      VARCHAR(50) NOT NULL,
    user_id     VARCHAR(30) NOT NULL,
    ncontent    VARCHAR(500) NOT NULL,
    nhits       INT,
    ndate       DATETIME,
    
    CONSTRAINT fk_pesade_nboard_user_id FOREIGN KEY (user_id) REFERENCES pesade_member(USER_ID)
);
use myshop2019;
drop table pesade_product;
CREATE TABLE pesade_product (
    pid INT AUTO_INCREMENT PRIMARY KEY, -- 상품 아이디
    pname VARCHAR(100) NOT NULL, -- 상품명
    pdetail VARCHAR(255), -- 상품 디테일
    pscentdetail VARCHAR(100), -- 상품 향 설명
    pdesc TEXT, -- 상품 설명
    pprice INT, -- 상품 가격
    pgift_id INT, -- 기프트 아이디
    category_id INT, -- 카테고리 아이디
    pinfo TEXT, -- 상품 info
    pnotice TEXT, -- 공지
    pimage VARCHAR(255), -- 상품 이미지
    pdetailimage VARCHAR(255), -- 상품 설명 이미지
    CONSTRAINT fk_product_gift FOREIGN KEY (pgift_id) REFERENCES pesade_gift_option(pgid),
    CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES pesade_category(category_id)
);

insert into pesade_product(pname, pdetail, pscentdetail, pdesc, pprice, pgift_id,category_id, pinfo, pnotice, pimage, pdetailimage)
values('Veil Rose',
'Eau de parfum 100ml',
'Floral Woody',
'사랑에 빠진 모습 뒤에 숨겨진 가장 솔직한 내면.\n장미와 제라늄의 우아하고 오묘한 조화가 따뜻하지만 신선한 느낌을 선사한다. 이어지는 매콤한 핑크페퍼와 패츌리가 화사함과 동시에 정돈된 분위기를 느끼게 한다.\n ',
148500,
null,
1,
'전성분\n변성알코올, 향료, 정제수, 피이지-40하이드로제네이티드캐스터오일, 벤질알코올, 시트랄, 시트로넬올, 유제놀, 파네솔, 제라니올, 리모넨, 리날룰',
' 교환&반품에 대한 자세한 내용은 하단 Help 페이지에서 확인 가능합니다.\n
* 선물포장 시, 쇼핑백은 M사이즈에 적합합니다.',
'https://pesade.kr/web/product/medium/202407/b0068a58d313b28d9f624313eb2431ea.jpg',
'https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/NNEditor/20240704/E18483E185A2E1848CE185B52023.jpg'
);

insert into pesade_product(pname, pdetail, pscentdetail, pdesc, pprice, pgift_id,category_id, pinfo, pnotice, pimage, pdetailimage)
values('Veil Rose',
'Eau de parfum 100ml',
'Floral Woody',
'사랑에 빠진 모습 뒤에 숨겨진 가장 솔직한 내면.\n장미와 제라늄의 우아하고 오묘한 조화가 따뜻하지만 신선한 느낌을 선사한다. 이어지는 매콤한 핑크페퍼와 패츌리가 화사함과 동시에 정돈된 분위기를 느끼게 한다.\n ',
148500,
null,
2,
'전성분\n변성알코올, 향료, 정제수, 피이지-40하이드로제네이티드캐스터오일, 벤질알코올, 시트랄, 시트로넬올, 유제놀, 파네솔, 제라니올, 리모넨, 리날룰',
' 교환&반품에 대한 자세한 내용은 하단 Help 페이지에서 확인 가능합니다.\n
* 선물포장 시, 쇼핑백은 M사이즈에 적합합니다.',
'https://pesade.kr/web/product/medium/202407/b0068a58d313b28d9f624313eb2431ea.jpg',
'https://cafe24.poxo.com/ec01/pesade/riyx6H4Qgn12CNAAvdKWORrW2JQd1TTFoaCJGhyuokq1MWxKxAMOFqImpMhTLUZH/_/web/upload/NNEditor/20240704/E18483E185A2E1848CE185B52023.jpg'
);

select *  from pesade_product p, pesade_category c 
where p.category_id = c.category_id
order  by c.category_name desc;

CREATE TABLE pesade_category (
    category_id INT AUTO_INCREMENT PRIMARY KEY, -- 카테고리 아이디
    category_name VARCHAR(100) NOT NULL -- 카테고리 이름
);

insert into pesade_category(category_name) values('pesade');
