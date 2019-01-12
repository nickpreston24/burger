create DATABASE if not EXISTS burgers_db;

use burgers_db;

create TABLE burgers
(
    id int not null AUTO_INCREMENT,
    burger_name varchar(150),
    devoured boolean,
    primary key (id)
);


#select * from burgers;