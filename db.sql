Drop database IF  EXISTS nest_js_project;
Create Database IF NOT EXISTS nest_js_project;
Use nest_js_project;
SET nameS utf8mb4;
SET DEFAULT_storage_engine=InnoDB;
#SET time_zone = 'Asia/Karachi';
SET time_zone = "+05:00";
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_SAFE_UPDATES = 0;
select @mac_id;


############ DROPPING TABLE START

DROP TABLE IF EXISTS descriptions;
DROP TABLE IF EXISTS material_data;
DROP TABLE IF EXISTS charact_data;
DROP TABLE IF EXISTS charact_value;
DROP TABLE IF EXISTS units;
DROP TABLE IF EXISTS user;



############ DROPPING TABLE END
############ CREATING TABLE START

CREATE TABLE descriptions(
    _id INT PRIMARY KEY AUTO_INCREMENT,
	c_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    u_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    tenantId VARCHAR(100),
    clientId VARCHAR(100),
    type VARCHAR(500),
    language VARCHAR(5),
    value VARCHAR(100)
	);
Create Table material_data(
	_id  INT PRIMARY KEY AUTO_INCREMENT,
    mac_id INT DEFAULT 0 NOT NULL,
    c_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    u_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    isactive VARCHAR(1) DEFAULT 'Y' NOT NULL,
    tenantId VARCHAR(100) DEFAULT '' NOT NULL,
    clientId VARCHAR(100) DEFAULT '' NOT NULL,
    materialNumber VARCHAR(100) DEFAULT '' NOT NULL,
	unitId INT NOT NULL DEFAULT 0,
	FOREIGN KEY fk_material_data_unitId(unitId) REFERENCES units(_id)

);

CREATE TABLE charact_data(
	_id INT PRIMARY KEY AUTO_INCREMENT,
    c_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    u_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	tenantId VARCHAR(100) DEFAULT '' NOT NULL,
    clientId VARCHAR(100) DEFAULT '' NOT NULL,
	materialDataId INT NOT NULL DEFAULT '0',
	name   VARCHAR(40) DEFAULT '' NOT NULL,
	type   VARCHAR(100) DEFAULT '' NOT NULL,
	length VARCHAR(100) DEFAULT '' NOT NULL,
	decimals INT(20) NOT NULL DEFAULT 0,
	unitId INT NOT NULL DEFAULT 0,
	FOREIGN KEY fk_material_data_charact_data(unitId) REFERENCES units(_id),
	FOREIGN KEY fk_charact_data_materialDataId(materialDataId) REFERENCES material_data(_id)

    ); 

CREATE TABLE charact_value(
	_id INT PRIMARY KEY AUTO_INCREMENT,
    c_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    u_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    isactive VARCHAR(1) DEFAULT 'Y' NOT NULL,
	tenantId VARCHAR(100) DEFAULT '' NOT NULL,
    clientId VARCHAR(100) DEFAULT '' NOT NULL,
	charactDataId INT NOT NULL DEFAULT '0',
	valueChar VARCHAR(100) DEFAULT '' NOT NULL,
	valueNum INT DEFAULT 0 NOT NULL,
	valueNumFrom INT DEFAULT 0 NOT NULL,
	valueNumTo INT DEFAULT 0 NOT NULL,
	FOREIGN KEY fk_charact_value_charactDataId(charactDataId) REFERENCES charact_data(_id)

    ); 

CREATE TABLE units(
	_id INT PRIMARY KEY AUTO_INCREMENT,
    c_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    u_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	isactive VARCHAR(1) DEFAULT 'Y' NOT NULL,
	tenantId VARCHAR(100) DEFAULT '' NOT NULL,
    clientId VARCHAR(100) DEFAULT '' NOT NULL,
    unit VARCHAR(3) DEFAULT '' NOT NULL,
    unitText VARCHAR(100) DEFAULT '' NOT NULL
 
    ); 

	CREATE TABLE user(
	id INT PRIMARY KEY AUTO_INCREMENT,
    c_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    u_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	isactive VARCHAR(1) DEFAULT 'Y' NOT NULL,
	firstName VARCHAR(100) DEFAULT '' NOT NULL,
    lastName VARCHAR(100) DEFAULT '' NOT NULL,
    age int DEFAULT 0 NOT NULL 
    ); 



SET FOREIGN_KEY_CHECKS = 1;
SET SQL_SAFE_UPDATES = 1;


	