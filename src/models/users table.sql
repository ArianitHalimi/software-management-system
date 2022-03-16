create table Users(
	userId varchar(255),
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    createdAt datetime not null,
    updatedAt datetime not null,
    primary key (userId)
);
