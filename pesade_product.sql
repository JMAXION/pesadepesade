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
drop table pesade_product;

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
