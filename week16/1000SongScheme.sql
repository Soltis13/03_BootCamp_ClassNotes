DROP DATABASE IF EXISTS TopSongs;

CREATE DATABASE TopSongs;

USE TopSongs;

CREATE TABLE songs (
	item_id INT NOT NULL AUTO_INCREMENT,
    rank INT NULL,
    artist VARCHAR(55) NULL,
    title VARCHAR(55) NULL,
    songyear INT NULL,
    raw_total DECIMAL(10,2) NULL,
    raw_USA DECIMAL(10,2) NULL,
    raw_UK DECIMAL(10,2) NULL,
    raw_EU DECIMAL(10,2) NULL,
    raw_rest_of_world DECIMAL(10,2) NULL,
    PRIMARY KEY (item_id)
);
