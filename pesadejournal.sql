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
"",
""
);

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
"2",
"2023.03.07",
"구찌 알케미스트 니치퍼퓸. '재정의된 럭셔리'라는 슬로건 아래 화려한 색감과 풍성한 디테일로 모두를 사로잡은 브랜드 구찌. 그 정신이 향수에 고스란히 반영되었을 때, 알케미스트 가든이 탄생했습니다.

알케미스트 컬렉션은 구찌 브랜드의 총괄 디자이너인 알렉산드로 미켈레가 직접 크리에이티브 디렉션과 제작에 참여한 구찌 최초의 오트 퍼퓨머리(Haute Perfumery) 로, 마스터 조향사인 알베르토 모리야스가 최상급의 원료들과 플라워 에센스로 블렌딩한 럭셔리 라인입니다.

연금술, 그리고 앤티크 약제상의 나무 선반에 진열되어 있는 최초의 향수 용기에서 영감을 얻은 골드 색상 포인트 장식의 보틀은 화이트 래커드 글래스로 되어 있어, 하얀 도자기를 연상시키는 동시에 신비스러운 무드를 자아내네요.

자, 이제 구찌가 섬세하고도 낯설게 표현해낸, 상상 속 꿈의 정원으로 초대합니다. 문을 열면 눈 앞에 가득 펼쳐질 비현실과 비일상, 모순과 환상의 세계를 경험해 보세요.",
"구찌 하우스가 모든 노하우를 쏟아부어 장인정신으로 만들어낸 내러티브 세계와 작품들, 어떻게 관람하셨나요? 구찌 100주년을 기념한 향수까지도 포함된 컬렉션인 만큼, 블룸이나 메모아 뒨 오더 등의 다른 라인과 비교했을 때 차원이 다를 정도의 퀄리티와 특별한 테마를 경험할 수 있었습니다.

알케미스트 컬렉션의 작품들은 모두, 향조가 미니멀하여 트레일 변화가 적다는 특징도 흥미로운데요. 이것이 단점보다는, 오히려 장점으로 다가옵니다. 그 덕에, 구찌가 사용한 최상급 향료의 퀄리티, 그리고 그들이 그려낸 풍경과 장면이 직관적이고 선명하게 느낄 수 있을 거예요. 또한 두가지 향수를 레이어링 함에 있어서도 향이 전혀 어지러워지지 않고, 각각 그려낸 장면들이 자연스럽게 겹쳐져 또 다른 하나의 완벽한 그림으로 펼쳐질 수 있게끔 합니다. 마음에 드는 순간들을 조합하여 색다른 장면을 만들어보는 경험도 즐겨 보세요.",
"https://cdn.perfume-dev.com/curation/1678148302941_230306-curation-slide1.png",
"https://cdn.perfume-dev.com/curation/1678148304568_230306-curation-slide2.png",
"https://cdn.perfume-dev.com/curation/1678148306126_230306-curation-slide3.png",
"https://perfumegraphy.com/web/product/big/202208/1bda289868d9b8107fc81601321ad379.jpg",
"https://perfumegraphy.com/web/product/big/202108/9605ba44d2282da89482554f030f2e0a.jpg",
"https://perfumegraphy.com/web/product/big/202303/31be875faf1d59f19619e41e696bac09.jpg",
"https://perfumegraphy.com/web/product/big/202303/fadb31f6756c64981fb31b403334dcd2.jpg",
"https://perfumegraphy.com/web/product/big/202208/f60b64993464a0c61f20620381c236f6.jpg",
"https://perfumegraphy.com/web/product/big/202207/5abbaf32874037a62e75f1d4884052e3.jpg",
"GUCCI Alchemist's Garden | 윈터스 스프링",
"GUCCI Alchemist's Garden | 어 송 포 더 로즈",
"GUCCI Alchemist's Garden | 티어스 오브 아이리스",
"GUCCI Alchemist's Garden | 더 아이즈 오브 더 타이거",
"GUCCI Alchemist's Garden | 문라이트 세레나데",
"GUCCI Alchemist's Garden | 어 윈터 멜로디",
"나긋한 미모사와 싱그러운 아카시아 꽃 속에 녹여낸 따뜻한 햇살 두어 방울

나긋한 촉감의 산들 바람이 창문을 톡톡 두드리며 안부를 전하는 봄. 정취를 물씬 느끼고자 창문을 여니 가득 흘러와 마주한 꽃 향기. 그 모든 감각들이, 순식간에 행복하고 아름다운 기억을 불러일으켰던 기억 속 장면을 그려낸 작품입니다.
포근한 햇살을 가득 품어 밝고 아늑한 부드러움으로 마음을 녹여주는 미모사의 향기를 즐기다 보면, 어느새 저 멀리서 봄을 준비하는 아카시아 꽃 향기가 촉촉함을 머금고 슬며시 다가와 눈꺼풀을 두드리는 듯 싱그럽게 섞이네요.",
"새벽 이슬을 머금고, 독보적인 선의 아름다움으로 유혹하는 불가리안 로즈

호화로우면서도 웅장한 구찌 하우스 속, 비밀스럽게 감춰진 신비로운 분홍빛 장미 정원. 그 문을 열자 눈이 부시도록 쏟아지는 장미의 선명한 빛깔과, 들어오는 이들을 단번에 유혹하려는 듯 아찔하게 넘실대는 향기에 넋을 놓고 바라보는 장면을 그려낸 작품입니다.
가장 순도가 높고 투명한 불가리안 로즈의 럭셔리함, 차분한 듯 관능적인 다마스커스 로즈 특유의 유혹적인 향이 물기를 가득 머금은 채 휘감기며 만들어진, 가장 신비롭고도 아름다운 장미의 모습이네요.",
"화려한 색 사이에서도 가장 빛나는 백색, 그 모순적인 순백의 아이리스

저마다의 화려함을 뽐내는 형형색색의 사람들과 칵테일, 호화로운 그릇과 꽃으로 수놓인 디너 파티. 그 속에서, 주변의 모든 색을 지워버리는 듯 이질적이고도, 가장 빛나는 백색의 실크 드레스. 화려한 색 사이 아무런 색도 없었지만, 모순적이게도 가장 밝게 빛나던 그녀를 마주하는 장면을 그려낸 작품입니다.
꽃잎을 살포시 머금은 듯 우아함을 자연스럽게 품은 살결과, 부드럽고 얇은 실크의 감촉을 닮아 순수한 아이리스 향기가 섞이며 속살이 비치는 듯이 깨끗하고 투명한 순백색의 실크 드레스를 그려내고 있네요.",
"금빛으로 물드는 아늑한 분위기의 라운지, 시간을 붙잡고 싶게 만드는 앰버

구찌 하우스의 클래식한 정신이 그대로 깃든 부티크 호텔의, 금빛으로 물들은 아늑한 라운지. 마치 시간이 멈춘 듯 편안한 마음으로 공간에 녹아 들어, 오로지 그 순간만을 즐기는 장면을 그려낸 작품입니다.
가죽 소파와 앤티크 인테리어로 꾸며진 아늑한 분위기. 그곳에서 즐기는 달콤한 휴식을 닮은 랍다넘-바닐라와 함께 황금색 앰버가 이국적인 감성을 담고 잔잔히 빛을 내며 고급스럽고 달달한 향기를 내네요.",
"푸른 들판과 새파란 하늘, 그리고 청량한 라벤더가 모여 연주하는 신록의 세레나데

어른이 된 이제는, 돌아갈 수 없는 상상 속 유년 시절의 여름날. 나만의 휴식처에 땀을 식히려 누웠을 때 들리는 푸르른 세이지 위에 앉은 매미 소리, 풀잎들이 바람을 맞는 소리와 뛰어노는 아이들의 웃음 소리. 행복했던 기억 속 장면을 그대로 그려낸 작품입니다.
활기찬 여름날의 에너지로 기쁘게 흔들리는 세이지의 풀잎 소리가 시원한 라벤더 바람과 함께 귓등을 타고 흐르는 듯, 깨끗하고 청량함이 가득 흘러오는 여름날의 향기네요.",
"초겨울, 서늘한 바람이 눈 덮인 삼나무 사이를 타고 지나가며 만들어지는 겨울의 노래

코 끝 차가운 겨울, 겨울의 산공기를 폐 끝까지 머금으며 느껴지는 시원하고 서늘한 향기. 그 숨을 내뱉으며 눈 앞 가득 퍼지는 하얀 입김과, 입김이 흐려지며 다시금 보이는 국경의 눈 덮인 산. 시리도록 아름다웠던 풍경을 그려낸 작품입니다.
추운 겨울날, 차가운 바람을 머금고 자란 솔나무들이 빽빽하게 들어선 숲 속, 눈 덮인 베르가못의 시원한 향기를 한 움큼 쥔 바람이 나무 사이를 가볍게 흔들며 연주하는 겨울의 멜로디가 들려오네요.");

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
"3",
"2023.02.01",
"오디딸리는 창립자인 마리나와 세바스찬이 호텔 '르 시레누즈' 50주년을 축하하기 위해 새롭게 론칭한 향수 브랜드입니다. 2004년 이탈리아 포지타노 호텔 '르 시레 누즈'에서 보낸 경험에 의해 각각의 향기에 대한 영감을 받았습니다. 다큐멘터리 프로듀서인 마리나와 작가 세바스찬이 만나 호텔 르 시레누즈는 물론이고, 이태리 여러 지역에서의 환희와 사랑, 역사 그리고 기쁨의 기억들을 향기와 보톨을 통해 표현해 내고 있어요.

포지타노에서의 어린시적 기억들, 한여름의 향기로 가득한 시칠리아의 과수원, 마지오레 호숫가에서의 비밀 연애. 오디딸리의 향들은 이태리 곳곳을 마치 펼쳐 보여주듯 향을 통해 생동감 있는 이야기들을 들려줍니다.

오디딸리가 담은 이태리의 푸른 보석, 포지타노의 순간들을 만끽하러 가보시죠.",
"흘러가는 평범한 삶 속 눈부시게 특별한 순간들.
우리는 아주 평범한 일상 속에서도 정신이 아득할 정도의 행복함을, 주체할 수없이 마음이 간질거리는 설렘을 느끼곤 합니다. 찰나의 특별함을 곱씹으며 하루를 버티어내고 작은 솜털 같은 슬픔에 온 우주가 무너지는 듯한 절망을 느끼곤 합니다. 그래도 꿋꿋이 삶이라는 큰 파도를 살아내는 모두의 이야기들이 오디딸리 향수에서도 슬그머니 맡아지는 듯합니다.

오디딸리의 향기를 편안한 마음으로 천천히, 눈을 감고 깊이 맡고 있노라면 번잡한 도심 속에서 금방이라도 너른 대양이 눈앞에 펼쳐진 열대야의 해안가에서 선연하게 불어오는 바닷바람이 살결을 스쳐 지나가는 듯하네요. 부담 없이 편안히 맡아지는 오디딸리의 순간들을 가득 채우는 향기를 경험해 보세요.

다큐멘터리 프로듀서인 마리나와 작가 세바스찬이 만나 그들이 만끽한 이태리 남부 포지타노 해변에서의 잊지 못할 삶의 순간을 담은 향수인 만큼 향수마다 스토리텔링이 굉장히 잘 되어있는 브랜드입니다. 오디딸리의 스토리를 배경으로 퍼퓸그라피가 녹여낸 이야기들을 둘러보는 것도 하나의 재미일 거예요.",
"https://cdn.perfume-dev.com/curation/1676872058827_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-1.png",
"https://cdn.perfume-dev.com/curation/1676872058827_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-1.png",
"https://cdn.perfume-dev.com/curation/1676872058827_230125-curation-slide%C3%AB%C2%8C%C2%80%C3%AC%C2%A7%C2%80-1.png",
"https://perfumegraphy.com/web/product/big/202302/df24c0f4b3138f9652f341a2fee53a8f.jpg",
"https://perfumegraphy.com/web/product/big/202302/96650d3e1938924f12f91f71edf96f45.jpg",
"https://perfumegraphy.com/web/product/big/202302/d16647ba96588702c62e90515989f9fb.jpg",
"https://perfumegraphy.com/web/product/big/202302/8443ea6c6667d5e5a274bd71eb6e21c7.jpg",
"https://perfumegraphy.com/web/product/big/202302/aa94e3ba9d5cb03208d1e73abf2b1bcd.jpg",
"https://perfumegraphy.com/web/product/big/202302/11ac9158830904fb78af97d2825f33d3.jpg",
"Eau d'Italie | 오디딸리",
"Eau d'Italie | 피오르 피오레",
"Eau d'Italie | 로사 그레타",
"Eau d'Italie | 아쿠아 데시마",
"Eau d'Italie | 쟈뎅 뒤 포에트",
"Eau d'Italie | 오 라크",
"호텔 '르 시레누즈'의 시그니처 향기, 가볍고 시원하게 흩어지는 미네랄 시트러스 계열의 산뜻한 풀내음 향기

절벽 끝 아슬하게 자리잡은 베르가못 나무 아래 - 알싸한 향기가 서근하게 올라오는 베르가못 나무에 툭 떨궈진 비터 오렌지를 집어 들고 한 조각 질겅 씹으며 생각했다. 달콤 쌉싸름한 것이 꼭 삶과 닮아 있다고. 달콤함이 입안 가득 채우고 목구멍을 지날 때쯤 떫은 맛이 느껴지는 것이 말이다. 아득하게 지나쳐가는 환희와 기쁨, 그리고 슬픔들. 코를 훑고 지나가는 패출리의 매콤함은 이따금 이별의 순간을 떠올리게 한다.",
"입춘을 알리는 봄날의 재스민, 햇살처럼 포근하고 소담히 내려앉는 부드러운 꽃 향기

다정은 사소하게 피어나 담대해진다 - 당장이라도 무엇이든지 집어삼킬 것 같은 위협적인 파도가 이는 겨울 바다. 포용적인 햇살과 짙은 향취를 품고 다가온 재스민이 성난 파도를 그러안자 이내 잠잠해졌다. 영원할 것 같던 시린 마음. 자신의 손이 차가워지는 지도 모르는 채 의심 없이 어루만지던 작은 손길 하나로 한 계절에 묶여있던 사람이 온 우주를 품는 순간. 누군가의 다정은 사소하게 피어나 담대해진다는 것을 그때 처음 알았다. 발갛게 익은 두 뺨과 굳은 표정 위로 내려앉던 재스민, 봄날의 햇살 같은 마음을 품어 모두 내어주던 그 사람의 손끝에서 풍기던 새콤한 꽃향기.",
"푸른 장미가 만발한 정원, 사방을 가득 채우는 파란 장미의 달콤한 향기

간질거리던 입맞춤, 아릿하게 저려오는 마음 - 길고도 아주 짧은 순간이었다. 서로의 입술 위로 지워지지 않을 달콤함이 얹히기까지. 영원할 것 같으면서도 방금의 일이 꿈처럼 느껴질 만큼 아득하게 느껴졌던 순간. 포개어지던 부드러운 입술 위로 느껴지던 은은하고 담백한 찻잎 향, 중간중간 서로를 바라보던 눈동자 속에 비치는 자신을 바라볼 때 느껴지던 미묘한 기류를 타고 퍼지는 장미향은 현실이라 할 수 없을 정도로 몽환적이었다. 푸른 장미에서 느낄 수 있을 거라곤 상상치도 못한 진득한 달콤함이 한껏 무르익은 새빨간 장미의 실루엣을.",
"청청한 여름날, 나홀로 나무 아래를 가볍게 메우던 레몬의 푸릇한 향기

시리고 푸르게 퍼지는 청춘의 향 - 단순한 호기심에서였다. 서퍼가 되겠다고 다짐했던 것은 약간의 충동과 잃을 것이 없는 마음가짐. 무서울 게 없을 터였다. 잃을 것이 없던 내게 소중한 기억과 잊고 싶지 않은 몸의 감각을 일깨워 준 것은 허름한 마음이었지만 두터운 레몬 껍질처럼 금세 단단해졌다. 일렁이는 파도의 흐름을 타고 일어서는 순간의 짜릿함을 느끼고, 파도 위에서 맡던 푸르른 대양의 향기가 얼마나 향기로운지, 나의 알량함은 온데간데없어지던 신기루의 연속. 파아란 바다를 잠시나마 붉게 물들이는 노을이 절정으로 치달으며 저무는 순간, 젖은 머리칼과 온몸을 훑고 지나는 바람결에 실려오는 시린 풀 내음과 레몬 껍질의 칼칼함.",
"흘러가던 바람도 쉬었다 가는 여름날의 향기로운 궁정, 사방을 가득 채우는 그리너리한 스파이시 향기

감귤나무 아래, 맨살을 스치는 바람을 활자로 엮어낸 시인의 단상은 짙은 녹음의 생명력을 품고 나부낀다 - 초여름의 신록이 촘촘히 밀도를 올리는 7월 초입, 내리쬐는 햇살에 옅고 얕게 주름지는 표정과 후텁지근한 기온에 무게가 실리는 계절, 찾아온 여름 손님. 초면이지만 어딘가 친숙하고 낯설지 않은 그가 내민 감귤 하나. 완연한 감귤의 모습을 갖추지 못한 퍼런 귤 한 조각을 입에 넣었을 때 퍼지던 새콤함과 약간의 떫음. 을 건네고 얼마 지나지 않아 나지막이 내뱉던 그의 한마디를 곱씹다 보니 마음 속에 무르익어 한동안 모든 계절에 여름을 선사했다. '마음도 가만히 쉬어주지 않으면 무르익지 못해 떫어져요.'",
"한여름날의 비밀정원, 호숫가에 핀 연꽃의 눅진한 꽃 향기

봄꽃들이 가히 닿지 못하는 여름날의 호숫가의 다채로움, 시샘하는 봄을 뒤로하고 고개 내미는 호숫가의 연꽃 - 우리의 서사가 시작되던 그날. 봄에서 여름으로 넘어가던 다채로운 계절의 풍경에 취해 길을 잃어 우연히 들어갔던 비밀 정원에서 시작된 만남. 유난히도 햇볕이 날카롭게 쏘이던 날의 그녀를 마주했을 때, 주변에 피어난 꽃들의 향기에 취한 것인지 환각을 보는 것처럼 아름다웠던 그녀. 찰나에 사랑이라는 감정이 아지랑이 피어오르듯 마음 한 편에서 꿈틀거렸고 어떠한 고민도 없이 생뚱맞은 사랑을 고백했던 것이다. 당혹스러울 만도 한 사랑고백에 부드러운 꽃내음이 느껴지는 고운 미소를 띠고 햇볕도 무찌르는 밝은 분위기로 긍정의 대답을 했던 그녀의 모습은 몇 년이 지나도록 선명하다.");

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
"4",
"2023.01.17",
"세계에서 가장 오래된 캔들 메이커 트루동

300년 이상의 역사를 가진 프랑스 왕실 공식 왁스 납품 업체, 현존하는 가장 오래된 향초 브랜드 트루동을 소개합니다. 트루동의 향초, 룸 스프레이의 가격이 비싸게만 느껴지시나요? 트루동의 역사와 그들이 지켜온 신념, 그리고 그들의 장인 정신을 알게 된다면 트루동을 향한 시선이 바뀌게 될 것입니다. 가죽 장인들의 정성이 가득 들어가는 명품 가방, 명품 위의 명품 에르메스가 있다면 향초계의 럭셔리 브랜드 대적할 수 없는 트루동이 굳건히 그 자리를 지키고 있습니다.

브랜드의 역사는 1643년 프랑스 Saint-Honore 가에 있는 작은 상점에서부터 시작합니다. 루이 14세의 왕실과 교회에 양초를 제작하며 브랜드를 키워 나갔고 루이 14세와 나폴레옹 황제에 의해 왕실 공식 공급업체로 선정되었으며 1889년 우수한 품질을 인정받아 만국 박람회에서 금메달을 받으며 오늘날까지 꾸준한 사랑을 받아 오랜 기간 축적해 온 향초 기술을 기반으로 향수를 선보이며 풍부하고 깊은 역사적 향기를 재현합니다.

트루동의 모토는 'Deo regique Laborant' 신과 왕을 위해 일한다는 뜻으로 트루동의 깊은 역사를 만들어 준 사건을 들여다보게 되면 바로 이해가 가실 거예요. 벌통 무늬 로고는 수세기 동안 메종 트루동 캔들의 최상급 품질을 보장해 준 벌들에 찬사이며 로고 속의 문양은 왕실 왁스 공급 업체로 만들어 준 루이 14세의 상징이자 그를 향한 헌사라고 합니다. 이러한 역사를 지니고 있는 만큼 트루동이 프랑스 왕실에 대한 헌신이 돋보이는 것 같네요. 캔들의 유리 글라스는 이탈리아 투스카니 빈치에서 장인에 의해 직접 hand-blowing 과정으로 제작되어 크기와 모양이 조금씩 다르고 장인의 정성과 손길을 느낄 수 있습니다.

이제 트루동이 조금은 다른 시선으로 보이시나요? 그렇다면 향기를 느껴볼 시간입니다.",
"하루 종일 컴퓨터 화면을 보느라 지친 눈, 피로한 몸과 온종일 당신이 의식하지 못하는 순간순간 다양한 냄새를 맡느라 피로가 쌓이는 후각에 트루동의 향기는 자연적이고 신선한 자극을 선사할 거예요. 분명한 향기를 가지며 각 향기마다의 분위기와 개성도 모두 틀리지만 당신이 어렵지 않게 맡을 수 있도록 적당한 선에서 부담스럽지 않고 안식을 가져다 주는 편안한 분위기를 유지하며 발향 됩니다. 고급스러운 패키징 못지않은 럭셔리한 향기는 당신의 공간의 밀도를 높입니다. 미감 좋은 향기와 감각적인 디자인. 오브제로도 툭- 두어도 멋스러움이 묻어 나오는 트루동으로 인테리어와 향기를 한번에 사로잡아보세요.",
"https://cdn.perfume-dev.com/curation/1673941922429_230117-curation-slide01.jpg",
"https://cdn.perfume-dev.com/curation/1673941925473_230117-curation-slide02.jpg",
"https://cdn.perfume-dev.com/curation/1673941928380_230117-curation-slide03.jpg",
"https://perfumegraphy.com/web/product/big/202301/53f39d99b55ffd750aa0263ac4578d44.jpg",
"https://perfumegraphy.com/web/product/big/202301/6986b07b2efce30939920eae4ea90b27.jpg",
"https://perfumegraphy.com/web/product/big/202301/249b0fad32488479b27b37b1b5533554.jpg",
"https://perfumegraphy.com/web/product/big/202301/29b5b440f6f42b55235a6f1a553b14be.jpg",
"https://perfumegraphy.com/web/product/big/202301/298d9eacf93d505b098593cc9a36f457.jpg",
"https://perfumegraphy.com/web/product/big/202301/068ea2aad1eb0c6482609b99498f18a9.jpg",
"Trudon | 씨르노스",
"Trudon | 아브 델 카데르",
"Trudon | 조세핀",
"Trudon | 에르네스토",
"Trudon | 마듀라이",
"Trudon | 레지오",
"지중해 호텔 발코니, 무화과 나무에서 너르게 퍼지는 단내와 선선한 바람에 상큼하게 영그는 정취

검붉은 흙의 양분을 가득 먹고 자란 무화과나무, 충분히 익을 때를 기다리며 지중해의 따스한 바람에도 잎사귀가 살랑살랑 흔들리며 잔뜩 여유로운 모습인데요. 누구나 과일이 무르익어 가는 계절을 사랑하듯 손님을 자주 초대하길 좋아하는 분이라면 집 안을 무화과 향기로 가득 채워 풍성한 싱그러움을 만끽해 보세요.",
"일본의 료칸, 청량한 공기를 마시며 몸을 녹이는 순간, 스피아민트와 우디가 천천히 내려앉아 가장 깊은 휴식으로 빠져드는 곳

아날로그 감성 가득한 스피아 민트와 클로브의 그리너리한 향기가 따뜻한 감각의 짙은 우디와 상쾌하게 어우러진 포물선을 그리는데요. 느긋한 발걸음으로 조경이 잘 가꾸어진 카페 정원을 거니는 듯 빈티지와 상쾌한 따스함이 공간을 구석구석 채워나갑니다. 자기 전 뿌린다면 취침 시 자연 속 정원을 천천히 걸음을 옮기는 듯 마음 편안한 향기가 포근하게 맡아져 숙면 취하기 좋은 향입니다.",
"아이보리색 침구 위, 카멜리아 꽃송이가 부드럽게 떨어져 은은하게 퍼지는 향기

나폴레옹의 첫번째 부인 조세핀, 그녀의 정원에서 영감을 받아 차분하면서도 고상한 꽃향기가 특징입니다. 마치 분홍빛장미와 새빨간 카멜리아 꽃잎의 가장 부드러운 곳만 골라 비누로 녹여낸 후 온몸을 풍성한 거품으로 씻어낸 뒤 살결에 남은 잔향처럼 은은하면서도 포근하게 남습니다. 하얀 아이보리 색 침구류, 바람에 유영하듯 흔들리는 커튼 바닥으로 차르르 떨어지는 레이스 디테일처럼 말이죠.",
"이태원 편집숍, 문을 여는 순간 단숨에 퍼지는 시가와 레더

고동색 나무 먼지가 부드럽게 내려앉은 빈티지 바, 촉감만으로도 섹시하게 느껴지는 가죽 러그, 그리고 안개처럼 그 위를 실키하게 덮는 센슈얼함까지 - 쿠바의 레더와 시가에서 영감을 받아 제작된 만큼 스모키의 세련됨을 느끼게 하는 포인트가 있어요. 분위기 있는 바버샵 혹은 녹사평과 이태원 언저리의 편집샵에서 퍼질 것만 같은 향기로 한층 짙은 분위기를 연출하기 좋습니다.",
"크리미한 재스민이 침구와 닮은 감촉으로 부드럽게 퍼지는 순간

방 안 가득 하얀 꽃을 피우는 마듀라이. 트루동 룸 스프레이 라인 중 가장 깨끗한 재스민 향기를 품고 있습니다. 언제라도 뛰어들고 싶은 아이보리색 침대에 누웠을 때, 살결을 감싸주는 부드러움과 포근한 무드로 하얀 재스민 꽃향기가 너르게 번집니다. 고대로부터 사랑과 관능의 꽃으로 쓰였던 재스민, 특히 신혼부부의 선물을 고민하고 있다면 혹은 신혼집에 둘 룸스프레이를 고르고 있다면 마듀라이를 추천합니다.",
"자몽의 산뜻함의 무드를 침대 위에서도, 편안한 힐링의 상큼한 향기

먹기 좋게 하나씩 떼어 놓은 자몽과 귤, 오렌지가 모처럼의 유가에 신나하며 한껏 천진난만한 미소를 지을 때 날법한 산뜻함으로 향기를 맡는 사람으로 하여금 저절로 기분 좋은 미소를 자아냅니다. 호불호 없을 은은함으로 오전의 피로, 오후의 노곤함을 잔잔히 밀어내고 싶을 때라면 언제라도 레지오를 찾게 될 거예요."

);