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

