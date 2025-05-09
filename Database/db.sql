create Database Droughtdb;
use Droughtdb;
create table Researcher(ResearcherId int auto_increment primary key,Fname varchar(20),Lname varchar(20));
create table Event(EventId int auto_increment primary key,ResearcherId int,EventImage varchar(255),EventMessage text,foreign key(ResearcherId) reference Researcher(ResearcherId));
create table News(NewsId int auto_increment primary key,ResearcherId int,NewsImage varchar(255),NewsMessage text,foreign key(ResearcherId) reference Researcher(ResearcherId))