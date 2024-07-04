use myshop2019;

create table stock_table(
sid INT primary key auto_increment,
sname VARCHAR(100),
saddress VARCHAR(500),
sphone VARCHAR(100),
sopentime VARCHAR(100)
);

select * from stock_table;

insert into stock_table(sname, saddress,sphone, sopentime) values(
"하이츠 서교",
"서울 마포구 양화로12길 16-8, 1F",
"+82 2-3144-0430",
"월-일 12:00pm - 9:00pm"
);
insert into stock_table(sname, saddress,sphone, sopentime) values(
"하이츠 익스체인지",
"서울 영등포구 여의대로 108, B2",
"+82 2-3277-0843",
"월-일 10:30am - 8:30pm"
);
insert into stock_table(sname, saddress,sphone, sopentime) values(
"아난티 코드 살롱 드 이터널저니",
"경기 가평군 설악면 유명로 1007-90, 1F",
"+82 31-581-4000",
"월-일 11:00am - 9:00pm"
);
insert into stock_table(sname, saddress,sphone, sopentime) values(
"아난티 코브 센트바이 아난티",
"부산광역시 기장군 기장읍 기장해안로 268-31, 1F",
"+82 51-604-7000",
"월-일 11:00am - 9:00pm"
);
insert into stock_table(sname, saddress,sphone, sopentime) values(
"빌라쥬 드 아난티 LPC 코발트",
"부산 기장군 기장읍 기장해안로 267-7, 1F",
"+82 51-662-7000",
"월-일 11:00am - 9:00pm"
);
insert into stock_table(sname, saddress,sphone, sopentime) values(
"","","",""
)