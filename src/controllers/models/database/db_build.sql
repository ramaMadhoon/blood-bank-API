BEGIN;
 DROP TABLE IF EXISTS  patients,  donors, blood_bank
  CASCADE;

CREATE TABLE Patients (
id SERIAL PRIMARY KEY,
Name VARCHAR (255) NOTNULL ,
blood group VARCHAR (255),
);

CREATE TABLE Donors (
id SERIAL PRIMARY KEY,
Name VARCHAR (255) NOTNULL ,
blood group VARCHAR (255),
contact number INT ,
 VARCHAR(50) NOT NULL
);


CREATE TABLE Blood bank (
name VARCHAR (255) NOT NULL,
  city VARCHAR (255) NOT NULL,
  contact number INT  ,
     FOREIGN KEY (donor_id)  REFERENCES donors(id)
);


COMMIT;