use myshop2019;


create table journal_table(
jid INT primary key auto_increment,
jcategory VARCHAR(100),
jtitle VARCHAR(200),
jdesc VARCHAR(200),
jimg VARCHAR(500),
jdate varchar(100),
jbranddesc varchar(500),
jcarouseltitle varchar(100)
);

select * from journal_table;
drop table journal_table;

insert into journal_table(jcategory, jtitle, jdesc, jimg, jdate, jbranddesc, jcarouseltitle) values(
"BRAND",
"향기를 처방해드립니다.",
"하루종일 긍정적인 몰입을 돕는 안눈치아타 디퓨저 컬렉션 ",
"https://cdn.perfume-dev.com/curation/1709084041178_240227-curation_th.jpg",
"2024.02.26",
"향기는 보이지 않지만 우리의 기분과 에너지 향상에 큰 영향을 끼칩니다. 라벤더가 마음을 편안하게 하고 시트러스는 활력을 더해주는 것처럼요.
항상 좋은 컨디션을 유지하고 싶으신가요? 그렇다면 매일 머무는 공간 한 부분에 홈 프래그런스 아이템을 놓아보는 건 어떨까요.",
"ANNUNZIATA
MOOD OF A DAY"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg, jdate, jbranddesc, jcarouseltitle) values(
"BRAND",
"구찌가 전개하는 꿈의 정원, 알케미스트 가든",
"낯설지만 익숙한, 환상의 내러티브 ",
"https://cdn.perfume-dev.com/curation/1678148348903_230307-curation_th.jpg",
"2023.03.07",
"구찌 알케미스트 니치퍼퓸. '재정의된 럭셔리'라는 슬로건 아래 화려한 색감과 풍성한 디테일로 모두를 사로잡은 브랜드 구찌. 그 정신이 향수에 고스란히 반영되었을 때, 알케미스트 가든이 탄생했습니다.
자, 이제 구찌가 섬세하고도 낯설게 표현해낸, 상상 속 꿈의 정원으로 초대합니다. 문을 열면 눈 앞에 가득 펼쳐질 비현실과 비일상, 모순과 환상의 세계를 경험해 보세요.",
"현실과 환상의 경계를
무너뜨리는 구찌 컬렉션"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg, jdate, jbranddesc, jcarouseltitle) values(
"BRAND",
"이탈리아 포지타노의 눈부신 기억.",
"찬란하고 아름다웠던 그날의 순간을 향유하며 – ",
"https://cdn.perfume-dev.com/curation/1676872083448_230125-curation_th.jpg",
"2023.02.01",
"포지타노에서의 어린시적 기억들, 한여름의 향기로 가득한 시칠리아의 과수원, 마지오레 호숫가에서의 비밀 연애. 오디딸리의 향들은 이태리 곳곳을 마치 펼쳐 보여주듯 향을 통해 생동감 있는 이야기들을 들려줍니다.
오디딸리가 담은 이태리의 푸른 보석, 포지타노의 순간들을 만끽하러 가보시죠.",
"이태리 남부의 푸른 보석,
포지타노의 낭만"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg,jdate, jbranddesc, jcarouseltitle) values(
"BRAND",
"300년의 역사와 유럽의 문화를 담은 트루동",
"프랑스 왕실 공식 캔들 메이커, 캔들계의 에르메스 럭셔리 향초 브랜드",
"https://cdn.perfume-dev.com/curation/1676011746225_1673941901564_230117-curation-th.webp",
"2023.01.17",
"300년 이상의 역사를 가진 프랑스 왕실 공식 왁스 납품 업체, 현존하는 가장 오래된 향초 브랜드 트루동을 소개합니다. 트루동의 향초, 룸 스프레이의 가격이 비싸게만 느껴지시나요? 트루동의 역사와 그들이 지켜온 신념, 그리고 그들의 장인 정신을 알게 된다면 트루동을 향한 시선이 바뀌게 될 것입니다. 가죽 장인들의 정성이 가득 들어가는 명품 가방, 명품 위의 명품 에르메스가 있다면 향초계의 럭셔리 브랜드 대적할 수 없는 트루동이 굳건히 그 자리를 지키고 있습니다.",
"루이 14세가 사랑한
향초 브랜드, 트루동"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg,jdate, jbranddesc, jcarouseltitle) values(
"BRAND",
"향수로 표현하는 예술 알타이아",
"향기를 통한 스토리텔링의 힘과 애정, 그리고 특별한 과거에 대한 오마주",
"https://cdn.perfume-dev.com/curation/1676011758519_1673398770630_230110-curation-th.webp",
"2023.01.04",
"각각의 오 드 퍼퓸은 그들의 얽혀있는 과거와 현재가 연상되는 후각적 요소를 포함하고 있으며, 시대를 초월하는 동시에 현대적인 향기를 내기 위해 애정 어린 솜씨로 만들어졌습니다. 알타이아의 패키지는 마리나와 세바스찬은 사용자가 개인적인 방식으로 각각의 향을 발견하고 궁극적으로 향기가 자신을 대변할 수 있도록, 현대적이고 우아하며 미니멀리즘이 반영된 디자인으로 만들어졌다고 하네요.",
"향기로 마주하는
운명적인 순간"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg,jdate, jbranddesc, jcarouseltitle) values(
"BRAND",
"섬세한 프렌치 무드, 스테파니 브루진",
"세밀한 조향과 감각으로 담아내는 프랑스의 순간",
"https://cdn.perfume-dev.com/curation/1669863323197_221123-curation-th.webp",
"2022.12.01",
"'향수는 제게 있어 성격을 표현하는 하나의 수단이자 신비로움이며 향수를 뿌리는 사람의 모든 것을 표현하는 매개체입니다.' 조향사이자 크리에이터인 스테파니 브루진은 어릴 때부터 향기를 섬세하게 인식했고 향료를 익히며 향을 적절하게 사용하는 법을 깨우쳤습니다.
그녀가 조향하는 모든 향수들에는 프랑스의 아름다운 면면을 살펴다 볼 수 있는데요. 센강 근처에 자리 잡은 백조의 호수라 불리우는 '릴 우 씨뉴'부터 프랑스 파리의 세비뉴 가라는 이름을 붙인 유명한 파리 후작이자 프랑스 문단의 문인의 우아함을 담은 '로 드 세비뉴'처럼 프랑스의 아름다운 찰나와 고찰이 담긴 향수임을 쉽게 알 수 있습니다.",
"컴템포러리
모던 앤 시크"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg,jdate, jbranddesc, jcarouseltitle) values(
"MOOD",
"밀도 높은 늦가을의 향기",
"꾸밈없는 편안함, 차(tea) 향수",
"https://cdn.perfume-dev.com/curation/1668652749856_221110-curation-th.webp",
"2022.11.15",
"쌀쌀해지는 기온에 괜히 허한 마음이 드는 계절이 왔습니다. 저마다의 방법으로 마음의 빈틈을 채우는 가을, 누군가는 시선과 마음이 머무르게 되는 문장들로, 서로의 체온을 나누는 다정한 포옹으로, 손끝까지 얼얼하게 따스해지는 차 한 잔으로 밀도 높게 채우는 나날을 보내고 있겠지요.",
"노을이 붉게
무르익는 계절
"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg,jdate, jbranddesc, jcarouseltitle) values(
"MOOD",
"품격있는 남자의 향",
"오우드 나무의 묵직함을 멋스럽게 담은 향수들",
"https://cdn.perfume-dev.com/curation/1668652785337_221114-curation-th.webp",
"2022.11.14",
"서늘해지는 기온, 가벼워지는 공기. 그 뒤로 무게감이 실리는 아웃핏. 분위기에도 무게를 실어주고픈 계절, 오우드가 가진 묵직함은 거친 검은 나무로부터 오는 듯한 깊고 짙은 퇴폐미를 연출합니다.",
"빠져드는
그의 향기"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg,jdate, jbranddesc, jcarouseltitle) values(
"MOOD",
"세미 클래식 앤 프레피 룩",
"너무 가벼운 향수보단 조금은 무게감 있고, 보다 더 세련된",
"https://cdn.perfume-dev.com/curation/1668652800500_221115-curation-th.webp",
"2022.11.13",
"과하지 않지만 평범하지도 않은, 세련되고 클래식한 무드의 향기. 누군가의 인상에 깊이 남을 스타일처럼 잊지 못할 당신의 분위기와 향기를 찾아보세요.",
"무겁지도
가볍지도 않은"
);

create table detailimage_table(
did INT primary key auto_increment,
jid int not null,
cimg1 varchar(200),
cimg2 varchar(200),
cimg3 varchar(200),
cimg4 varchar(200),
dimg1 varchar(200),
dimg2 varchar(200),
dimg3 varchar(200),
dimg4 varchar(200),
dimg5 varchar(200),
constraint fk_detailimage_table_jid foreign key(jid) references journal_table(jid)
);
select * from detailimage_table;

insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"1",
"https://cdn.perfume-dev.com/curation/1709022953829_240227-curation-slide1.jpg",
"https://cdn.perfume-dev.com/curation/1709022956127_240227-curation-slide2.jpg",
"https://cdn.perfume-dev.com/curation/1709022958103_240227-curation-slide3.jpg",
"",
"https://cdn.perfume-dev.com/curation/1709025053845_240227-curation-mood%20image1.jpg",
"https://cdn.perfume-dev.com/curation/1709080287131_240227-curation-mood%20image3.jpg",
"https://cdn.perfume-dev.com/curation/1709080297744_240227-curation-mood%20image2.jpg",
"https://perfumegraphy.com/web/product/big/202402/5645f3fceaae7ab060d514df97fa6ace.jpg",
""
);
insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"2",
"https://cdn.perfume-dev.com/curation/1678148302941_230306-curation-slide1.png",
"https://cdn.perfume-dev.com/curation/1678148304568_230306-curation-slide2.png",
"https://cdn.perfume-dev.com/curation/1678148306126_230306-curation-slide3.png",
"https://cdn.perfume-dev.com/curation/1678148307699_230306-curation-slide4.png",
"https://perfumegraphy.com/web/product/big/202208/1bda289868d9b8107fc81601321ad379.jpg",
"https://perfumegraphy.com/web/product/big/202108/9605ba44d2282da89482554f030f2e0a.jpg",
"https://perfumegraphy.com/web/product/big/202303/31be875faf1d59f19619e41e696bac09.jpg",
"https://perfumegraphy.com/web/product/big/202303/fadb31f6756c64981fb31b403334dcd2.jpg",
"https://perfumegraphy.com/web/product/big/202208/f60b64993464a0c61f20620381c236f6.jpg"
);
insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"3",
"https://cdn.perfume-dev.com/curation/1676872058827_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-1.png",
"https://cdn.perfume-dev.com/curation/1676872060772_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-2.png",
"https://cdn.perfume-dev.com/curation/1676872062733_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-3.png",
"https://cdn.perfume-dev.com/curation/1676872064641_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-4.png",
"https://perfumegraphy.com/web/product/big/202302/df24c0f4b3138f9652f341a2fee53a8f.jpg",
"https://perfumegraphy.com/web/product/big/202302/96650d3e1938924f12f91f71edf96f45.jpg",
"https://perfumegraphy.com/web/product/big/202302/d16647ba96588702c62e90515989f9fb.jpg",
"https://perfumegraphy.com/web/product/big/202302/8443ea6c6667d5e5a274bd71eb6e21c7.jpg",
"https://perfumegraphy.com/web/product/big/202302/aa94e3ba9d5cb03208d1e73abf2b1bcd.jpg"
);insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"4",
"https://cdn.perfume-dev.com/curation/1673941922429_230117-curation-slide01.jpg",
"https://cdn.perfume-dev.com/curation/1673941925473_230117-curation-slide02.jpg",
"https://cdn.perfume-dev.com/curation/1673941928380_230117-curation-slide03.jpg",
"https://cdn.perfume-dev.com/curation/1673941931702_230117-curation-slide04.jpg",
"https://perfumegraphy.com/web/product/big/202301/53f39d99b55ffd750aa0263ac4578d44.jpg",
"https://perfumegraphy.com/web/product/big/202301/6986b07b2efce30939920eae4ea90b27.jpg",
"https://perfumegraphy.com/web/product/big/202301/249b0fad32488479b27b37b1b5533554.jpg",
"https://perfumegraphy.com/web/product/big/202301/29b5b440f6f42b55235a6f1a553b14be.jpg",
"https://perfumegraphy.com/web/product/big/202301/298d9eacf93d505b098593cc9a36f457.jpg"
);insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"5",
"https://cdn.perfume-dev.com/curation/1673397505064_230110-curation-slide01.jpg",
"https://cdn.perfume-dev.com/curation/1673397508194_230110-curation-slide02.jpg",
"https://cdn.perfume-dev.com/curation/1673397510662_230110-curation-slide03.jpg",
"https://cdn.perfume-dev.com/curation/1673397516924_230110-curation-slide04.jpg",
"https://perfumegraphy.com/web/product/big/202301/24e833683400b0db76c4760fd951113a.jpg",
"https://perfumegraphy.com/web/product/big/202301/cf816245e99306435a6c1534868ea886.jpg",
"https://perfumegraphy.com/web/product/big/202301/3e27dde1aec1ed79e31db0e90a51e9e2.jpg",
"https://perfumegraphy.com/web/product/big/202301/37e0a0a1f547a042ee984de74a3b190c.jpg",
"https://perfumegraphy.com/web/product/big/202301/31e447ffed8bd983e0f3efbedabba2f1.jpg"
);insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"6",
"https://cdn.perfume-dev.com/curation/1669863316741_221123-curation-slide01.jpg",
"https://cdn.perfume-dev.com/curation/1669863319777_221123-curation-slide02.jpg",
"https://cdn.perfume-dev.com/curation/1669863322361_221123-curation-slide03.jpg",
"https://cdn.perfume-dev.com/curation/1669863330070_221123-curation-slide04.jpg",
"https://perfumegraphy.com/web/product/big/202106/3bedeabf4934fa76283b244ac25074ea.jpg",
"https://perfumegraphy.com/web/product/big/202107/086033380b9f823afdbdeab8b74bd352.jpg",
"https://perfumegraphy.com/web/product/big/202107/eaf9fbcac281f47d7c40fbec0b833e10.jpg",
"https://perfumegraphy.com/web/product/big/202107/5669c0870f4fb0d77500bd439f0c6318.jpg",
"https://perfumegraphy.com/web/product/big/202210/5e4713d731ff2536f5996763db4c45b0.jpg"
);insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"7",
"http://cdn.perfume-dev.com/curation/221109-curation-slide01.jpg",
"http://cdn.perfume-dev.com/curation/221109-curation-slide02.jpg",
"http://cdn.perfume-dev.com/curation/221109-curation-slide03.jpg",
"",
"https://perfumegraphy.com/web/product/big/202204/251ebb0ac3a76216e2b97b2e68df2062.jpg",
"https://perfumegraphy.com/web/product/big/202302/0d6cf1f36c834e0ba027fdbac389b035.jpg",
"https://perfumegraphy.com/web/product/big/202107/3f9b6d4808701d99775a37ce9ba1968b.jpg",
"https://perfumegraphy.com/web/product/big/202111/859c6178e8ea23b652ecf8fcaace4ca6.jpg",
"https://perfumegraphy.com/web/product/big/202108/8dddfda4164c9802251b764726c82325.jpg"
);insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"8",
"https://cdn.perfume-dev.com/curation/1668579126131_221114-curation-slide01.jpg",
"https://cdn.perfume-dev.com/curation/1668579126131_221114-curation-slide02.jpg",
"https://cdn.perfume-dev.com/curation/1668579126131_221114-curation-slide03.jpg",
"https://cdn.perfume-dev.com/curation/1668579126131_221114-curation-slide04.jpg",
"https://perfumegraphy.com/web/product/big/202108/b3c1daf5bd2d5afad97100bf1eed1a5f.jpg",
"https://perfumegraphy.com/web/product/big/202108/f18023aa44ba17ed14025cf711a2297b.jpg",
"https://perfumegraphy.com/web/product/big/202401/9fd6680a693ee63f7429781a05bc6205.jpg",
"https://perfumegraphy.com/web/product/big/202202/c3c2748a0ce982458ae72b46b0517b34.jpg",
"https://perfumegraphy.com/web/product/big/202302/51f8e07d189a259c3f79db18b686948a.jpg"
);
insert into detailimage_Table(jid, cimg1, cimg2, cimg3, cimg4, dimg1, dimg2, dimg3, dimg4, dimg5) values(
"9",
"https://cdn.perfume-dev.com/curation/1668581674504_221115-curation-slide01.jpg",
"https://cdn.perfume-dev.com/curation/1668581674504_221115-curation-slide02.jpg",
"https://cdn.perfume-dev.com/curation/1668581674504_221115-curation-slide03.jpg",
"https://cdn.perfume-dev.com/curation/1668581674505_221115-curation-slide05.jpg",
"https://perfumegraphy.com/web/product/big/202208/493b0ec3c4b52bee0948e770913bcc6a.jpg",
"https://perfumegraphy.com/web/product/big/202308/e78495cbbe2d2b60ff91c89b798a2456.jpg",
"https://perfumegraphy.com/web/product/big/202210/922884fcfcb3929459a2962faa068dc5.jpeg",
"https://perfumegraphy.com/web/product/big/202108/20ce590927412c7fe92b7b57c9d7e9de.jpg",
"https://perfumegraphy.com/web/product/big/202211/99cf90aee8d01adec92450db4e672a6d.jpg"
);

create table journaldetail_table(
jdid INT primary key auto_increment,
jid int not null,
dtitle1 varchar(100),
dtitle2 varchar(100),
dtitle3 varchar(100),
dtitle4 varchar(100),
dtitle5 varchar(100),
ddesc1 varchar(500),
ddesc2 varchar(500),
ddesc3 varchar(500),
ddesc4 varchar(500),
ddesc5 varchar(500),
deditor varchar(500),
constraint fk_journaldetail_table_jid foreign key(jid) references journal_table(jid)
);

select * from journaldetail_table;
drop table journaldetail_table;

insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"1",
"Tips for Wake time | 활성화 모드",
"Tips for Work time | 집중 모드",
"Tips for Bedtime | 이완 모드",
"Annunziata | Diffuser Scent's Set",
"",
"어제의 피로감을 날려보내고 가뿐한 마음으로 잠들어있던 몸과 감각을 깨우는 시간. 기상 후 가장 활발하게 움직이는 신체 에너지를 더욱 생생하게 유지할 수 있는 시트러스-프루티 향기를 추천드립니다.",
"조명의 밝기를 맞추고 집중하기 좋은 환경을 만든 뒤 쌓인 업무를 차근차근 처리할 시간. 업무 공간을 낮은 톤으로 채운 진중한 무게감의 향기는 마음을 단정히 하도록 돕고, 뾰족한 사고를 가능하게 할 거예요.
",
"지친 하루의 끝. 누구보다 편안한 차림새로 포근한 침대 속에 파고들어 가라앉을 듯 몸을 이완해주세요. 이때 머리 맡에서 마음까지 평온하게 하는 향기가 은은하게 풍겨오면 더욱 완벽한 잠에 빠져들겠죠.",
"안눈치아타 디퓨저 센츠 세트.안눈치아타의 감각적인 향기를 취향에 맞춰 경험하실 수 있도록 구성한 시향 세트입니다.",
"",
"'이탈리아 피렌체의 가장 오래된 약국' 안눈치아타는 5세기에 걸쳐 유서 깊은 뷰티 브랜드로 성장해오고 있습니다. 최고의 조향 기술로 탄생한 안눈치아타만의 독보적인 향수 라인은 많은 사랑을 받고 있으며, 이제 디퓨저로도 그 유니크한 향기를 만날 수 있게 되었죠.

뛰어난 품질은 물론, 다양한 취향에 따라 선택할 수 있도록 11가지 향기를 선보이는 디퓨저 컬렉션. 안눈치아타는 공간에 깊이감을 더하고 싶으신 분, 삶의 질을 높여줄 아이템을 찾으시는 분 모두에게 알맞은 솔루션을 제시합니다."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"2",
"GUCCI Alchemist's Garden | 윈터스 스프링",
"GUCCI Alchemist's Garden | 어 송 포 더 로즈",
"GUCCI Alchemist's Garden | 티어스 오브 아이리스",
"GUCCI Alchemist's Garden | 더 아이즈 오브 더 타이거",
"GUCCI Alchemist's Garden | 문라이트 세레나데",
"나긋한 미모사와 싱그러운 아카시아 꽃 속에 녹여낸 따뜻한 햇살 두어 방울",
"새벽 이슬을 머금고, 독보적인 선의 아름다움으로 유혹하는 불가리안 로즈",
"화려한 색 사이에서도 가장 빛나는 백색, 그 모순적인 순백의 아이리스",
"금빛으로 물드는 아늑한 분위기의 라운지, 시간을 붙잡고 싶게 만드는 앰버",
"푸른 들판과 새파란 하늘, 그리고 청량한 라벤더가 모여 연주하는 신록의 세레나데",
"알케미스트 컬렉션의 작품들은 모두, 향조가 미니멀하여 트레일 변화가 적다는 특징도 흥미로운데요. 이것이 단점보다는, 오히려 장점으로 다가옵니다. 그 덕에, 구찌가 사용한 최상급 향료의 퀄리티, 그리고 그들이 그려낸 풍경과 장면이 직관적이고 선명하게 느낄 수 있을 거예요. 또한 두가지 향수를 레이어링 함에 있어서도 향이 전혀 어지러워지지 않고, 각각 그려낸 장면들이 자연스럽게 겹쳐져 또 다른 하나의 완벽한 그림으로 펼쳐질 수 있게끔 합니다. 마음에 드는 순간들을 조합하여 색다른 장면을 만들어보는 경험도 즐겨 보세요."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"3",
"Eau d'Italie | 오디딸리",
"Eau d'Italie | 피오르 피오레",
"Eau d'Italie | 로사 그레타",
"Eau d'Italie | 아쿠아 데시마",
"Eau d'Italie | 쟈뎅 뒤 포에트",
"절벽 끝 아슬하게 자리잡은 베르가못 나무 아래 - 알싸한 향기가 서근하게 올라오는 베르가못 나무에 툭 떨궈진 비터 오렌지를 집어 들고 한 조각 질겅 씹으며 생각했다. 달콤 쌉싸름한 것이 꼭 삶과 닮아 있다고. 달콤함이 입안 가득 채우고 목구멍을 지날 때쯤 떫은 맛이 느껴지는 것이 말이다. 아득하게 지나쳐가는 환희와 기쁨, 그리고 슬픔들. 코를 훑고 지나가는 패출리의 매콤함은 이따금 이별의 순간을 떠올리게 한다.",
"다정은 사소하게 피어나 담대해진다 - 당장이라도 무엇이든지 집어삼킬 것 같은 위협적인 파도가 이는 겨울 바다. 포용적인 햇살과 짙은 향취를 품고 다가온 재스민이 성난 파도를 그러안자 이내 잠잠해졌다. 영원할 것 같던 시린 마음. 자신의 손이 차가워지는 지도 모르는 채 의심 없이 어루만지던 작은 손길 하나로 한 계절에 묶여있던 사람이 온 우주를 품는 순간. 누군가의 다정은 사소하게 피어나 담대해진다는 것을 그때 처음 알았다. 발갛게 익은 두 뺨과 굳은 표정 위로 내려앉던 재스민, 봄날의 햇살 같은 마음을 품어 모두 내어주던 그 사람의 손끝에서 풍기던 새콤한 꽃향기.",
"간질거리던 입맞춤, 아릿하게 저려오는 마음 - 길고도 아주 짧은 순간이었다. 서로의 입술 위로 지워지지 않을 달콤함이 얹히기까지. 영원할 것 같으면서도 방금의 일이 꿈처럼 느껴질 만큼 아득하게 느껴졌던 순간. 포개어지던 부드러운 입술 위로 느껴지던 은은하고 담백한 찻잎 향, 중간중간 서로를 바라보던 눈동자 속에 비치는 자신을 바라볼 때 느껴지던 미묘한 기류를 타고 퍼지는 장미향은 현실이라 할 수 없을 정도로 몽환적이었다. 푸른 장미에서 느낄 수 있을 거라곤 상상치도 못한 진득한 달콤함이 한껏 무르익은 새빨간 장미의 실루엣을.",
"시리고 푸르게 퍼지는 청춘의 향 - 단순한 호기심에서였다. 서퍼가 되겠다고 다짐했던 것은 약간의 충동과 잃을 것이 없는 마음가짐. 무서울 게 없을 터였다. 잃을 것이 없던 내게 소중한 기억과 잊고 싶지 않은 몸의 감각을 일깨워 준 것은 허름한 마음이었지만 두터운 레몬 껍질처럼 금세 단단해졌다. 일렁이는 파도의 흐름을 타고 일어서는 순간의 짜릿함을 느끼고, 파도 위에서 맡던 푸르른 대양의 향기가 얼마나 향기로운지, 나의 알량함은 온데간데없어지던 신기루의 연속. 파아란 바다를 잠시나마 붉게 물들이는 노을이 절정으로 치달으며 저무는 순간, 젖은 머리칼과 온몸을 훑고 지나는 바람결에 실려오는 시린 풀 내음과 레몬 껍질의 칼칼함.",
"감귤나무 아래, 맨살을 스치는 바람을 활자로 엮어낸 시인의 단상은 짙은 녹음의 생명력을 품고 나부낀다 - 초여름의 신록이 촘촘히 밀도를 올리는 7월 초입, 내리쬐는 햇살에 옅고 얕게 주름지는 표정과 후텁지근한 기온에 무게가 실리는 계절, 찾아온 여름 손님. 초면이지만 어딘가 친숙하고 낯설지 않은 그가 내민 감귤 하나. 완연한 감귤의 모습을 갖추지 못한 퍼런 귤 한 조각을 입에 넣었을 때 퍼지던 새콤함과 약간의 떫음. 을 건네고 얼마 지나지 않아 나지막이 내뱉던 그의 한마디를 곱씹다 보니 마음 속에 무르익어 한동안 모든 계절에 여름을 선사했다. '마음도 가만히 쉬어주지 않으면 무르익지 못해 떫어져요.'",
"알케미스트 컬렉션의 작품들은 모두, 향조가 미니멀하여 트레일 변화가 적다는 특징도 흥미로운데요. 이것이 단점보다는, 오히려 장점으로 다가옵니다. 그 덕에, 구찌가 사용한 최상급 향료의 퀄리티, 그리고 그들이 그려낸 풍경과 장면이 직관적이고 선명하게 느낄 수 있을 거예요. 또한 두가지 향수를 레이어링 함에 있어서도 향이 전혀 어지러워지지 않고, 각각 그려낸 장면들이 자연스럽게 겹쳐져 또 다른 하나의 완벽한 그림으로 펼쳐질 수 있게끔 합니다. 마음에 드는 순간들을 조합하여 색다른 장면을 만들어보는 경험도 즐겨 보세요."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"4",
"Trudon | 씨르노스",
"Trudon | 아브 델 카데르",
"Trudon | 조세핀",
"Trudon | 에르네스토",
"Trudon | 마듀라이",
"지중해 호텔 발코니, 무화과 나무에서 너르게 퍼지는 단내와 선선한 바람에 상큼하게 영그는 정취",
"일본의 료칸, 청량한 공기를 마시며 몸을 녹이는 순간, 스피아민트와 우디가 천천히 내려앉아 가장 깊은 휴식으로 빠져드는 곳",
"아이보리색 침구 위, 카멜리아 꽃송이가 부드럽게 떨어져 은은하게 퍼지는 향기",
"고동색 나무 먼지가 부드럽게 내려앉은 빈티지 바, 촉감만으로도 섹시하게 느껴지는 가죽 러그, 그리고 안개처럼 그 위를 실키하게 덮는 센슈얼함까지 - 쿠바의 레더와 시가에서 영감을 받아 제작된 만큼 스모키의 세련됨을 느끼게 하는 포인트가 있어요. 분위기 있는 바버샵 혹은 녹사평과 이태원 언저리의 편집샵에서 퍼질 것만 같은 향기로 한층 짙은 분위기를 연출하기 좋습니다.",
"방 안 가득 하얀 꽃을 피우는 마듀라이. 트루동 룸 스프레이 라인 중 가장 깨끗한 재스민 향기를 품고 있습니다. 언제라도 뛰어들고 싶은 아이보리색 침대에 누웠을 때, 살결을 감싸주는 부드러움과 포근한 무드로 하얀 재스민 꽃향기가 너르게 번집니다. 고대로부터 사랑과 관능의 꽃으로 쓰였던 재스민, 특히 신혼부부의 선물을 고민하고 있다면 혹은 신혼집에 둘 룸스프레이를 고르고 있다면 마듀라이를 추천합니다.",
"하루 종일 컴퓨터 화면을 보느라 지친 눈, 피로한 몸과 온종일 당신이 의식하지 못하는 순간순간 다양한 냄새를 맡느라 피로가 쌓이는 후각에 트루동의 향기는 자연적이고 신선한 자극을 선사할 거예요. 분명한 향기를 가지며 각 향기마다의 분위기와 개성도 모두 틀리지만 당신이 어렵지 않게 맡을 수 있도록 적당한 선에서 부담스럽지 않고 안식을 가져다 주는 편안한 분위기를 유지하며 발향 됩니다. 고급스러운 패키징 못지않은 럭셔리한 향기는 당신의 공간의 밀도를 높입니다. 미감 좋은 향기와 감각적인 디자인. 오브제로도 툭- 두어도 멋스러움이 묻어 나오는 트루동으로 인테리어와 향기를 한번에 사로잡아보세요."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"5",
"Altaia | 유 손",
"Altaia | 바이 애니 아더 네임",
"Altaia | 돈 크라이 포 미",
"Altaia | 원더 오브 유",
"Altaia | 애니 데이 나우",
"산색이 풀빛으로 우거지던 그해 여름, 여린 바람에 실려오는 풀내음과 설렘",
"장미와 작약이 흐드러지는 비밀 정원, 만발하는 꽃봉오리처럼 톡 터뜨리는 리치의 과육",
"청청한 봄날의 잔야, 벚꽃 내음이 무아지경으로 쏟아지던 순간",
"아늑한 햇빛을 따라 천천히 유영하는 프리지아, 사랑하는 연인의 눈동자 속을 투영하며 비춰지는 산뜻한 워터멜론",
"암암하고 고요한 방 안, 단숨에 퍼지는 가장 성숙한 관능의 흑장미",
"모든 향기들이 각각의 개성을 품고 있어서 향기를 맡으며 마리나와 세바스찬이 담았을 찬란한 순간들을 상상해 보는 것도 향기를 더욱 풍부하게 만들어 주는 듯합니다. 이렇듯 알타이아에 담긴 두 연인의 깊은 이야기들을 여러분만의 스토리로 가볍게 풀어내 보세요."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"6",
"Stéphanie de Bruijn | 큐피동",
"Stéphanie de Bruijn | 캐시미어",
"Stéphanie de Bruijn | 마이 젠틀맨",
"Stéphanie de Bruijn | 델리스",
"Stéphanie de Bruijn | (new)몽타뉴",
"여우비가 훑고 간 이른 아침, 싱그러운 블랙 커런트의 달콤-쌉싸름함",
"화양연화 속 낡은 다락방, 우디 머스크의 붉은 톤이 따스하게 머무는 자리의 향기",
"철보다 단단한 심장을 가진 남자의 아로마틱 - 푸제르 계열 스킨내음",
"시나몬과 바닐라빈의 따스함이 천천히 머무르는 자리를 데우는 순간",
"보랏빛 노을이 저무는 언덕 위, 흩날리는 복숭아와 화이트 플로럴의 오리엔탈",
"투명한 유리 바틀만큼이나 청아함이 돋보이는 맑은 향조들로 이루어진 클래식 컬렉션 라인의 향수들은 은은하고 가벼워 향수 입문자도 큰 부담 없이 쉬이 손이 가는 향기들로 호불호가 거의 없어요. 잔향 또한 향수의 첫인상과 크게 달라지지 않지만 스테파니 브루진만이 가진 시트러스 계열의 구간이 한번 맡으면 오래 인상에 남아 뒤돌아서면 두고두고 떠올리며 상기시키고 있는 자신을 마주하게 만드는 매력적인 향수가 아닐 리 없습니다. 클래식 라인은 데일리하고 노멀한 향기들로 선물용으로도 추천드려요."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"7",
"Eisenburg | 텐테이션",
"Maison Margiela | 마차 메디테이션",
"Jo Malone | 얼그레이 앤 큐컴버",
"Eisenburg | 오프레쉬 옴므",
"Serge Lutens | 파이브 어 클락 오 진저",
"달콤 쌉싸름한 얼그레이 밀크티 한 잔",
"가볍고 뭉근하게 올라오는 개운한 녹차 향기",
"스파클링하게 올라오는 블랙 티의 부드러움",
"서늘한 바람을 맞이하며 마시는 라벤더&진저 티의 향긋함",
"럭셔리 호텔 라운지를 가득 채운 청량하고 스파이시한 진저 티",
"퍼퓸그라피는 당신께 단조롭지만 특별하고, 수수하지만 인상 깊은 찻잎의 향을 소개합니다. 옆구리 시린 가을은 보내주고 아로새겨지는 찻잎의 정취를 품어보세요.

"
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"8",
"Tom Ford | 오드우드",
"Le Labo | 상탈 33",
"Memo | 러시안 레더",
"Byredo | 우드 이모텔",
"Masion Margiela | 재즈클럽",
"거친듯하면서도 진중하고, 성숙하고 듬직한 남성미를 품은 스모키 오우드",
"수분을 한가득 머금은 울창한 숲속, 짙은 흙에 스미는 나무",
"허연 자작나무가 빼곡하게 서있는 설원에 퍼지는 시크한 레더",
"부드러운 위스키 속 감각적인 향기의 말린 로즈우드와 묵직하게 퍼지는 타바코",
"클래식한 오크통에서 스며나온 진득한 보드카의 몽롱한 향기",
"잘 다듬어진 와일드함의 표본, 오우드가 풍기는 검은 나무와 시크함을 느껴보세요."
);
insert into journaldetail_table(jid, dtitle1, dtitle2, dtitle3, dtitle4, dtitle5, ddesc1, ddesc2, ddesc3, ddesc4, ddesc5, deditor) values(
"9",
"Hermes | 트윌리 데르메스 오 프와브레",
"Yves Saint Laurent | 리브르",
"Van Cleef & Arpels | 상탈 블랑",
"Serge Lutens | 상탈 마제스퀼",
"Byredo | 발다프리크",
"보드랍지만 분명히 각인되는 로즈와 세련된 우디의 머스키함",
"
커리어 우먼 같은 라벤더와 오렌지 블로썸, 꽃 향기를 품은 파우더리",
"고소한 우유에 흠뻑 빠진 무화과, 샌달우드의 포근함에 나른해지는 오후",
"하얀 나무 위로 얹히는 카카오의 담백함, 구운 견과류에서 올라오는 고소함",
"자상한 분위기를 풍기는 우디, 늦가을의 따뜻한 라떼 한 잔",
"서늘한 가을과 겨울의 온도를 닮은 컴템포러리한 모던 시크, 프렌치 무드를 갖춰보세요."
);

select 
j.jid as id, j.jcategory, j.jtitle, j.jdesc, j.jimg, j.jdate, j.jbranddesc, j.jcarouseltitle,
i.cimg1, i.cimg2, i.cimg3, i.cimg4, i.dimg1, i.dimg2, i.dimg3, i.dimg4, i.dimg5,
d.dtitle1, d.dtitle2, d.dtitle3, d.dtitle4, d.dtitle5, d.ddesc1, d.ddesc2, d.ddesc3, d.ddesc4, d.ddesc5, d.deditor
from journal_table j, detailimage_table i, journaldetail_table d 
where j.jid = i.jid and i.jid = d.jid;