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
ddate varchar(100),
ddesc1 varchar(1000),
ddesc2 varchar(1000),
dcarouselimg1 varchar(500),
dcarouselimg2 varchar(500),
dcarouselimg3 varchar(500),
ddetailimg1 varchar(500),
ddetailimg2 varchar(500),
ddetailimg3 varchar(500),
ddetailimg4 varchar(500),
ddetailimg5 varchar(500),
ddetailimg6 varchar(500),
ddetailtitle1 varchar(500),
ddetailtitle2 varchar(500),
ddetailtitle3 varchar(500),
ddetailtitle4 varchar(500),
ddetailtitle5 varchar(500),
ddetailtitle6 varchar(500),
ddetaildesc1 varchar(500),
ddetaildesc2 varchar(500),
ddetaildesc3 varchar(500),
ddetaildesc4 varchar(500),
ddetaildesc5 varchar(500),
ddetaildesc6 varchar(500),
constraint fk_journal_detail_table_jid foreign key(jid) references journal_table(jid)
);

drop table journal_detail_table;

select * from journal_detail_table;

select did, d.jid as id, ddate, ddesc1, j.jcategory, j.jtitle, j.jdesc, j.jimg  from journal_detail_table d, journal_table j where d.jid = j.jid;

insert into journal_detail_table(
jid,
ddate,
ddesc1,
ddesc2,
dcarouselimg1,
dcarouselimg2,
dcarouselimg3,
ddetailimg1,
ddetailimg2,
ddetailimg3,
ddetailimg4,
ddetailimg5,
ddetailimg6,
ddetailtitle1,
ddetailtitle2,
ddetailtitle3,
ddetailtitle4,
ddetailtitle5,
ddetailtitle6,
ddetaildesc1,
ddetaildesc2,
ddetaildesc3,
ddetaildesc4,
ddetaildesc5,
ddetaildesc6) values(

"1",
"2024.02.26",
"향기는 보이지 않지만 우리의 기분과 에너지 향상에 큰 영향을 끼칩니다. 라벤더가 마음을 편안하게 하고 시트러스는 활력을 더해주는 것처럼요. 항상 좋은 컨디션을 유지하고 싶으신가요? 그렇다면 매일 머무는 공간 한 부분에 홈 프래그런스 아이템을 놓아보는 건 어떨까요. 디퓨저는 24시간 발향되어 언제든 원하는 효과와 취향에 맞춰 향기를 만끽할 수 있죠. 감각적인 디자인과 완성도 높은 향기를 자랑하는 안눈치아타 디퓨저와 함께라면 아침, 점심, 저녁 하루에도 몇 번씩 전환되는 모드에 온전히 몰입할 수 있을 거예요. 
다양한 무드로 선보이는 11가지 디퓨저 중 나에게 꼭 맞는 향기를 만나보세요.",
"'이탈리아 피렌체의 가장 오래된 약국' 안눈치아타는 5세기에 걸쳐 유서 깊은 뷰티 브랜드로 성장해오고 있습니다. 최고의 조향 기술로 탄생한 안눈치아타만의 독보적인 향수 라인은 많은 사랑을 받고 있으며, 이제 디퓨저로도 그 유니크한 향기를 만날 수 있게 되었죠.

뛰어난 품질은 물론, 다양한 취향에 따라 선택할 수 있도록 11가지 향기를 선보이는 디퓨저 컬렉션. 안눈치아타는 공간에 깊이감을 더하고 싶으신 분, 삶의 질을 높여줄 아이템을 찾으시는 분 모두에게 알맞은 솔루션을 제시합니다.",
"https://cdn.perfume-dev.com/curation/1709022953829_240227-curation-slide1.jpg",
"https://cdn.perfume-dev.com/curation/1709022956127_240227-curation-slide2.jpg",
"https://cdn.perfume-dev.com/curation/1709022958103_240227-curation-slide3.jpg",
"https://cdn.perfume-dev.com/curation/1709025053845_240227-curation-mood%20image1.jpg",
"https://cdn.perfume-dev.com/curation/1709080287131_240227-curation-mood%20image3.jpg",
"https://cdn.perfume-dev.com/curation/1709080297744_240227-curation-mood%20image2.jpg",
"https://perfumegraphy.com/web/product/big/202402/5645f3fceaae7ab060d514df97fa6ace.jpg",
"",
"",
"Tips for Wake time | 활성화 모드",
"Tips for Work time | 집중 모드",
"Tips for Bedtime | 이완 모드",
"Annunziata | Diffuser Scent's Set",
"",
"",
"어제의 피로감을 날려보내고 가뿐한 마음으로 잠들어있던 몸과 감각을 깨우는 시간. 기상 후 가장 활발하게 움직이는 신체 에너지를 더욱 생생하게 유지할 수 있는 시트러스-프루티 향기를 추천드립니다.
#Diffuser recipe 깨끗한 공기에 두둥실 실려오는 자연의 산뜻한 분위기 가득한 프레쉬 무드
· 세타ㅣ푸른 잔디 정원, 산들바람에 실려 온 상쾌한 시트러스 향기
· 비나티에리ㅣ와인 잔을 가볍게 부딪힐 때, 반짝거리는 프루티 와인의 달콤한 향기
· 바이아이 에 펠리치아이ㅣ선명한 분홍빛으로 그려지는 우아한 장미 향기
· 파브리ㅣ깨끗하고 세련된 인테리어가 연상되는 메탈릭한 향기",
"조명의 밝기를 맞추고 집중하기 좋은 환경을 만든 뒤 쌓인 업무를 차근차근 처리할 시간. 업무 공간을 낮은 톤으로 채운 진중한 무게감의 향기는 마음을 단정히 하도록 돕고, 뾰족한 사고를 가능하게 할 거예요.


#Diffuser recipe 차분히 집중할 수 있는 분위기 연출, 독보적인 개성으로 영감이 번뜩이는 유니크 무드

· 쥬디치 에 노타이 l 책장 넘기는 소리 가득한 도서관의 차분한 우드 향기
· 칼촐라이 l 그을린 레더 위로 차분하게 흐르는 인센스의 시크한 향기
· 메디치 에 스페치알리 l 강렬한 영감을 안겨주는 이국적인 향신료 향기
· 메르카탄티 l 오우드 장작으로 피우는 구수하고 달콤한 향기",
"지친 하루의 끝. 누구보다 편안한 차림새로 포근한 침대 속에 파고들어 가라앉을 듯 몸을 이완해주세요. 이때 머리 맡에서 마음까지 평온하게 하는 향기가 은은하게 풍겨오면 더욱 완벽한 잠에 빠져들겠죠.


#Diffuser recipe 이불을 감싼 듯 따듯한 색감 가득, 한층 느긋하고 편안한 공간을 연출하는 코지 무드

· 라나 l 포근한 침구류의 따듯한 온기가 떠오르는 머스크 향기
· 캄비오 l 눈부신 햇빛을 머금은 듯 상쾌한 시트러스-라일락 비누 향기
· 포르나이 l 갓 구운 디저트로 가득한 베이커리의 달콤한 향기",
"안눈치아타 디퓨저 센츠 세트


안눈치아타의 감각적인 향기를 취향에 맞춰 경험하실 수 있도록 구성한 시향 세트입니다. 일상을 함께 할 향기가 필요하셨다면, 이미지를 클릭해보세요.",
ddetaildesc5,
ddetaildesc6
);