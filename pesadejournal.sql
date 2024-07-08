use myshop2019;


create table journal_table(
jid INT primary key auto_increment,
jcategory VARCHAR(100),
jtitle VARCHAR(500),
jdesc VARCHAR(500),
jimg VARCHAR(500)
);

select * from journal_table;

insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"BRAND",
"향기를 처방해드립니다.",
"하루종일 긍정적인 몰입을 돕는 안눈치아타 디퓨저 컬렉션 ",
"https://cdn.perfume-dev.com/curation/1709084041178_240227-curation_th.jpg"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"BRAND",
"구찌가 전개하는 꿈의 정원, 알케미스트 가든",
"낯설지만 익숙한, 환상의 내러티브 ",
"https://cdn.perfume-dev.com/curation/1678148348903_230307-curation_th.jpg"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"BRAND",
"이탈리아 포지타노의 눈부신 기억.",
"찬란하고 아름다웠던 그날의 순간을 향유하며 – ",
"https://cdn.perfume-dev.com/curation/1676872083448_230125-curation_th.jpg"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"BRAND",
"300년의 역사와 유럽의 문화를 담은 트루동",
"프랑스 왕실 공식 캔들 메이커, 캔들계의 에르메스 럭셔리 향초 브랜드",
"https://cdn.perfume-dev.com/curation/1676011746225_1673941901564_230117-curation-th.webp"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"BRAND",
"향수로 표현하는 예술 알타이아",
"향기를 통한 스토리텔링의 힘과 애정, 그리고 특별한 과거에 대한 오마주",
"https://cdn.perfume-dev.com/curation/1676011758519_1673398770630_230110-curation-th.webp"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"BRAND",
"섬세한 프렌치 무드, 스테파니 브루진",
"세밀한 조향과 감각으로 담아내는 프랑스의 순간",
"https://cdn.perfume-dev.com/curation/1669863323197_221123-curation-th.webp"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"MOOD",
"밀도 높은 늦가을의 향기",
"꾸밈없는 편안함, 차(tea) 향수",
"https://cdn.perfume-dev.com/curation/1668652749856_221110-curation-th.webp"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"MOOD",
"품격있는 남자의 향",
"오우드 나무의 묵직함을 멋스럽게 담은 향수들",
"https://cdn.perfume-dev.com/curation/1668652785337_221114-curation-th.webp"
);
insert into journal_table(jcategory, jtitle, jdesc, jimg) values(
"MOOD",
"세미 클래식 앤 프레피 룩",
"너무 가벼운 향수보단 조금은 무게감 있고, 보다 더 세련된",
"https://cdn.perfume-dev.com/curation/1668652800500_221115-curation-th.webp"
);

create table journal_detail_table(
did INT primary key auto_increment,
jid INT not null,
dtitleimage varchar(500),
ddate varchar(100),
ddesc1 varchar(500),
ddesc2 varchar(500),
carouselid INT not null,
detailid INT,
constraint fk_journal_detail_table_jid foreign key(jid) references journal_table(jid)
);
create table journal_carousel(
cid INT primary key auto_increment,
jid INT not null,
carouselimg1 varchar(500),
carouselimg2 varchar(500),
carouselimg3 varchar(500),
carouselimg4 varchar(500),
carouselimg5 varchar(500),
carouselimg6 varchar(500),
carouselimg7 varchar(500),
carouselimg8 varchar(500),
constraint fk_journal_carousel_jid foreign key(jid) references journal_detail_table(jid)
);
create table detailimg_table(
dimgid INT primary key auto_increment,
jid INT not null,
ddetailimg1 varchar(500),
ddetailimg2 varchar(500),
ddetailimg3 varchar(500),
ddetailimg4 varchar(500),
ddetailimg5 varchar(500),
ddetailimg6 varchar(500),
ddetailimg7 varchar(500),
ddetailimg8 varchar(500),
ddetailimg9 varchar(500),
ddetailimg10 varchar(500),
ddetailimg11 varchar(500),
ddetailimg12 varchar(500),
constraint fk_detailimg_table_jid foreign key(jid) references journal_detail_table(jid)
);

create table detailtitle_desc_table(
dtdid INT primary key auto_increment,
jid INT not null,
ddetailtitle1 varchar(500),
ddetailtitle2 varchar(500),
ddetailtitle3 varchar(500),
ddetailtitle4 varchar(500),
ddetailtitle5 varchar(500),
ddetailtitle6 varchar(500),
ddetailtitle7 varchar(500),
ddetailtitle8 varchar(500),
ddetailtitle9 varchar(500),
ddetailtitle10 varchar(500),
ddetailtitle11 varchar(500),
ddetailtitle12 varchar(500),
ddetaildesc1 varchar(500),
ddetaildesc2 varchar(500),
ddetaildesc3 varchar(500),
ddetaildesc4 varchar(500),
ddetaildesc5 varchar(500),
ddetaildesc6 varchar(500),
ddetaildesc7 varchar(500),
ddetaildesc8 varchar(500),
ddetaildesc9 varchar(500),
ddetaildesc10 varchar(500),
ddetaildesc11 varchar(500),
ddetaildesc12 varchar(500),
constraint fk_detailtitle_desc_table_jid foreign key(jid) references journal_detail_table(jid)
);

desc journal_detail_table;
desc journal_carousel;
desc detailimg_table;
desc detailtitle_desc_table;
drop table journal_detail_table;
drop table journal_carousel;

select * from journal_table;
select * from journal_detail_table;
select * from journal_carousel;
select * from detailimg_table;
select * from detailtitle_desc_table;
select 
j.jid, j.jcategory, j.jtitle, j.jdesc, j.jimg, d.jid, d.dtitleimage, d.ddate, d.ddesc1, d.ddesc2, c.carouselid, c.carouselimg1, c.carouselimg2, c.carouselimg3
from journal_table j, journal_detail_table d, journal_carousel c
where j.jid = d.jid and d.carouselid = c.cid
;

insert into journal_detail_table(
jid,
dtitleimage,
ddate,
ddesc1,
ddesc2,
carouselid,
detailid
) values(
"1",
"https://cdn.perfume-dev.com/curation/1709022561184_242227-curation-cover.jpg",
"2024.02.26",
"향기는 보이지 않지만 우리의 기분과 에너지 향상에 큰 영향을 끼칩니다. 라벤더가 마음을 편안하게 하고 시트러스는 활력을 더해주는 것처럼요. 항상 좋은 컨디션을 유지하고 싶으신가요? 그렇다면 매일 머무는 공간 한 부분에 홈 프래그런스 아이템을 놓아보는 건 어떨까요. 디퓨저는 24시간 발향되어 언제든 원하는 효과와 취향에 맞춰 향기를 만끽할 수 있죠. 감각적인 디자인과 완성도 높은 향기를 자랑하는 안눈치아타 디퓨저와 함께라면 아침, 점심, 저녁 하루에도 몇 번씩 전환되는 모드에 온전히 몰입할 수 있을 거예요. 
다양한 무드로 선보이는 11가지 디퓨저 중 나에게 꼭 맞는 향기를 만나보세요.",
"'이탈리아 피렌체의 가장 오래된 약국' 안눈치아타는 5세기에 걸쳐 유서 깊은 뷰티 브랜드로 성장해오고 있습니다. 최고의 조향 기술로 탄생한 안눈치아타만의 독보적인 향수 라인은 많은 사랑을 받고 있으며, 이제 디퓨저로도 그 유니크한 향기를 만날 수 있게 되었죠.
뛰어난 품질은 물론, 다양한 취향에 따라 선택할 수 있도록 11가지 향기를 선보이는 디퓨저 컬렉션. 안눈치아타는 공간에 깊이감을 더하고 싶으신 분, 삶의 질을 높여줄 아이템을 찾으시는 분 모두에게 알맞은 솔루션을 제시합니다.",
"1",
"1"
);
insert into journal_carousel(
jid, carouselimg1, carouselimg2, carouselimg3, carouselimg4, carouselimg5, carouselimg6, carouselimg7, carouselimg8
) values(
"1",
"https://cdn.perfume-dev.com/curation/1709022953829_240227-curation-slide1.jpg",
"https://cdn.perfume-dev.com/curation/1709022956127_240227-curation-slide2.jpg",
"https://cdn.perfume-dev.com/curation/1709022958103_240227-curation-slide3.jpg",
"",
"",
"",
"",
""
);
insert into journal_detail_table(
jid,
dtitleimage,
ddate,
ddesc1,
ddesc2,
carouselid,
detailid
) values(
"2",
"https://cdn.perfume-dev.com/curation/1678149171822_230306-curation-cover.jpg",
"2023.03.07",
"구찌 알케미스트 니치퍼퓸. '재정의된 럭셔리'라는 슬로건 아래 화려한 색감과 풍성한 디테일로 모두를 사로잡은 브랜드 구찌. 그 정신이 향수에 고스란히 반영되었을 때, 알케미스트 가든이 탄생했습니다.
알케미스트 컬렉션은 구찌 브랜드의 총괄 디자이너인 알렉산드로 미켈레가 직접 크리에이티브 디렉션과 제작에 참여한 구찌 최초의 오트 퍼퓨머리(Haute Perfumery) 로, 마스터 조향사인 알베르토 모리야스가 최상급의 원료들과 플라워 에센스로 블렌딩한 럭셔리 라인입니다.
연금술, 그리고 앤티크 약제상의 나무 선반에 진열되어 있는 최초의 향수 용기에서 영감을 얻은 골드 색상 포인트 장식의 보틀은 화이트 래커드 글래스로 되어 있어, 하얀 도자기를 연상시키는 동시에 신비스러운 무드를 자아내네요.
자, 이제 구찌가 섬세하고도 낯설게 표현해낸, 상상 속 꿈의 정원으로 초대합니다. 문을 열면 눈 앞에 가득 펼쳐질 비현실과 비일상, 모순과 환상의 세계를 경험해 보세요.",
"구찌 하우스가 모든 노하우를 쏟아부어 장인정신으로 만들어낸 내러티브 세계와 작품들, 어떻게 관람하셨나요? 구찌 100주년을 기념한 향수까지도 포함된 컬렉션인 만큼, 블룸이나 메모아 뒨 오더 등의 다른 라인과 비교했을 때 차원이 다를 정도의 퀄리티와 특별한 테마를 경험할 수 있었습니다.
알케미스트 컬렉션의 작품들은 모두, 향조가 미니멀하여 트레일 변화가 적다는 특징도 흥미로운데요. 이것이 단점보다는, 오히려 장점으로 다가옵니다. 그 덕에, 구찌가 사용한 최상급 향료의 퀄리티, 그리고 그들이 그려낸 풍경과 장면이 직관적이고 선명하게 느낄 수 있을 거예요. 또한 두가지 향수를 레이어링 함에 있어서도 향이 전혀 어지러워지지 않고, 각각 그려낸 장면들이 자연스럽게 겹쳐져 또 다른 하나의 완벽한 그림으로 펼쳐질 수 있게끔 합니다. 마음에 드는 순간들을 조합하여 색다른 장면을 만들어보는 경험도 즐겨 보세요.",
"2",
"2");
insert into journal_carousel(
jid, carouselimg1, carouselimg2, carouselimg3, carouselimg4, carouselimg5, carouselimg6, carouselimg7, carouselimg8
) values(
"2",
"https://cdn.perfume-dev.com/curation/1678148302941_230306-curation-slide1.png",
"https://cdn.perfume-dev.com/curation/1678148304568_230306-curation-slide2.png",
"https://cdn.perfume-dev.com/curation/1678148306126_230306-curation-slide3.png",
"",
"",
"",
"",
""
);