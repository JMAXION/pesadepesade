use myshop2019;

create table press_table(
pid INT primary key auto_increment,
ptitle VARCHAR(100),
pdesc VARCHAR(500),
pseason VARCHAR(500),
pimg VARCHAR(500),
plink VARCHAR(500)
);
select pid, ptitle,pdesc, pseason, pimg, plink from press_table;
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"인테리어 맛집, 새로운 뷰티 플레이스3",
"공간이 주는 향에 대한 의미. 다채로운 향을 위한 방향성을 정하다.",
"W, October, 2022",
"https://pesade.kr/wJk/img/press/w-october-2022.png",
"http://www.wkorea.com/2022/09/02/%ec%a7%80%ea%b8%88-%eb%8b%b9%ec%9e%a5-%ea%b0%80%ec%95%bc%ed%95%98%eb%8a%94-%eb%89%b4-%eb%b7%b0%ed%8b%b0-%ea%b3%b5%ea%b0%84-3/"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"뷰티 스토어 맞나요?",
"아티스트와 협업한 전시 공간부터 라이브러리까지, 브랜드의 감성을 담은 요즘 뷰티 스토어의 면면.",
"Bazaar, October, 2022",
 "https://pesade.kr/wJk/img/press/bazaar-october-2022.png",
 "https://www.harpersbazaar.co.kr/article/71293"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"국뽕이 차오른다! 2022ver. K-향기 맛집은 어디?",
"마침내 나타난 퍼퓸 미슐랭",
"Cosmopolitan, October, 2022",
"https://pesade.kr/wJk/img/press/cosmopolitan-october-2022.png",
"https://www.cosmopolitan.co.kr/article/71177"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"국뽕이 차오른다! 2022ver. K-향기 맛집은 어디?지금 서울은 #1",
"라이프스타일 트렌드 in 서울",
 "Marie claire Masion, October, 2022",
 "https://pesade.kr/wJk/img/press/marieclairemasion-october-2022.png",
 "https://www.maisonkorea.com/life/2022/10/%ec%a7%80%ea%b8%88-%ec%84%9c%ec%9a%b8%ec%9d%80-1/"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"코스모가 준비한 2022 하반기 뷰티 트렌드 키워드는 무엇?",
"F:향수, 향초, 디퓨저 등 향기 나는 패밀리들.",
"Cosmopolitan, September, 2022",
"https://pesade.kr/wJk/img/press/cosmopolitan-september-2022.png",
"https://www.cosmopolitan.co.kr/article/70518"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"지금 등장한 인디 향수 다섯",
" 지금 등장한 인디 향수 다섯. 이전과는 다른 콘셉트로 새로운 향을 제안한다.",
"Allure, September, 2022",
"https://pesade.kr/wJk/img/press/allure-september-2022.png",
"https://www.allurekorea.com/2022/09/15/%ec%a7%80%ea%b8%88-%eb%93%b1%ec%9e%a5%ed%95%9c-%ec%9d%b8%eb%94%94-%ed%96%a5%ec%88%98-%eb%8b%a4%ec%84%af/"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"주목하라! 떠오르는 K-뷰티 브랜드",
"2022년 새롭게 출시된 K-뷰티 브랜드들의 공통점은 ‘미니멀’이다.",
"the NEIGHBOR, September, 2022",
"https://pesade.kr/wJk/img/press/theneighbor-september-2022.png",
"https://www.allurekorea.com/2022/09/15/%ec%a7%80%ea%b8%88-%eb%93%b1%ec%9e%a5%ed%95%9c-%ec%9d%b8%eb%94%94-%ed%96%a5%ec%88%98-%eb%8b%a4%ec%84%af/"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"#주말엔뉴플 향수 플래그십 스토어를 가야하는 이유",
"독특한 인테리어와 개성 넘치는 향이 기다리는 곳은 바로 여기!",
"Bazaar, August, 2022",
"https://pesade.kr/wJk/img/press/bazaar-august-2022.png",
"https://www.harpersbazaar.co.kr/article/68721"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"향으로 찾는 라이프스타일",
"최근 선보이는 향 브랜드들은 서로 다른 라이프스타일과 취향을 발견할 수 있는 경험을 선사한다.",
"Singles, July, 2022",
"https://pesade.kr/wJk/img/press/singles-july-2022.png",
"https://m.singleskorea.com/article/714138/THESINGLE"
);
insert into press_table(ptitle, pdesc, pseason, pimg, plink) values(
"향수 앤 라이프스타일 뷰티 브랜드 페사드(pesade)",
"아름다움을 향한 순수한 동경",
"Kbeaty, May, 2022",
"https://pesade.kr/wJk/img/press/singles-july-2022.png",
"https://www.kbeauty.news/news/articleView.html?idxno=908"
);