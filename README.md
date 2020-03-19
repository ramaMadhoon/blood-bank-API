# blood-bank-API

https://hackmd.io/ACS3ZywERe652fLvmVNqEQ?view
db_build.sql:
to build database (sql).

db_connection.js:
to build database connection.

db_build.js:
to build database file

    (npm init ===> package.json)
    (  npm install cowsay ====> package-lock.json)

<ul>
<li> FOREIGN KEY (donor_id)  REFERENCES Donors(id) </li>
   <li> A FOREIGN KEY is a key used to link two tables together. <li>
   <li> https://www.w3schools.com/sql/sql_foreignkey.asp</li>
   </ul>
<ol>
<li> npm i dotenv</li>
<li> npm i express</li>
<li> npm i nodemon</li>
<li>npm i pg </li>
</ol>

 <h1>db_build.sql </h1>
 <ul>
<li> db_build.sql in this file  bulid table</li>
 <p> <li> BEGIN ===>start </li><br>
<li>COMMIT ===> end  </li><br>
<li> <strong>DROP TABLE IF EXISTS </strong> ===> meansThe DROP TABLE statement deletes the specified table, and any data associated with it, from the database. The IF EXISTS clause allows the statement to succeed even if the specified tables does not exist. If the table does not exist and you do not include the IF EXISTS clause, the statement will return an error.</li> <br>
<h2> create table </h2> 
<li>CREATE TABLE  tablename (

) ;</li>

<li> id SERIAL PRIMARY KEY,</li>
<li>VARCHAR (255) NOT NULL </li>
 </p>
 </ul>
 </br>
 <h1>db_connection.js file</h1>
 <ol>
 <li>  what is <p>const { Pool } = require('pg');</p> means?
 <p> PostgreSQL is a general purpose and object-relational database management system, the most advanced open source database system.</p>

 </li>
 <li> ((const connectionString = process.env.DATABASE_URL;)) ===> means
 Database connection using `connection` URL
  </li>
  <li> <strong>Database connection pooling</strong> is a method used to keep database connections open so they can be reused by others.

Typically, opening a database connection is an expensive operation, especially if the database is remote. You have to open up network sessions, authenticate, have authorisation checked, and so on. Pooling keeps the connections active so that, when a connection is later requested, one of the active ones is used in preference to having to create another one. </li>

<li> ssl: !connectionString.includes('localhost'), ===>means  </li>
 </ol>
  <ul> 
   <h1> db_build.js</h1> <br>
   <p>fs :File system <br>
   const connection ===> to connection databasefile <br>
   const createTables ===>connection.query <br>
    </p>
  <li>const fs = require('fs');
const path = require('path');
const connection = require('./db_connection'); </li>
   </ul>
