use `h0jekdsbh3tjkavx`;
drop table if exists burgers;
create TABLE burgers
(
    id int not null AUTO_INCREMENT,
    burger_name varchar(150),
    devoured boolean default false,
    primary key (id)
);

insert into burgers (burger_name) values ("Hawaiian Burger");
insert into burgers (burger_name) values ("Royale with Cheese");
insert into burgers (burger_name) values ("Quarter Pounder");

select * from burgers;