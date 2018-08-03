-- Created the DB "wizard_schools_db" (only works on local connections)
DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  nameb varchar(30) NOT NULL,
  coolnesspoints int NULL,
  attitude varchar(30) NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (nameb, coolnesspoints, attitude) VALUES ("Jerry", 100, "Cool");
INSERT INTO actors (nameb, coolnesspoints, attitude) VALUES ("Kramer", 75, "SomewhatCool");
INSERT INTO actors (nameb, coolnesspoints, attitude) VALUES ("Elaine", 85, "LowCool");
INSERT INTO actors (nameb, coolnesspoints, attitude) VALUES ("George", 10, "NotCool");
