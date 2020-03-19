# blood-bank-API
https://hackmd.io/ACS3ZywERe652fLvmVNqEQ?view
<hr>
 <ol>
 <p> this is package i need in this project </p>
<li> npm install pg </li>
<li> npm i</li>
<li> npm run dev</li>
</ol>
<hr>
<ol>
 <h1> step to create database : </h1>
 <li>create user  n1 with password '1';</li>
 <li> /c ===> to connect database </li>
 <li> grant all privileges on database namedatabase  to nameuser; </li>
<li> Connecting to a database</li>
<li>Connecting to a PostgreSQL server from a node server, including the setup of environment variables (heroku) </li> </ol>

<ul>
<li>db_build.sql:</li>
to build database (sql).

<li>db_connection.js:</li>
to build database connection.

<li>db_build.js:</li>
to build database file</ul>

<p> (npm init ===> package.json)
    (  npm install cowsay ====> package-lock.json) </p>

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
<hr>
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
 <hr>
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
 <hr>
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
   <hr>
 <hr>
 <ol>
 <h1> <strong>Supertest:  </strong></h1>
 <p>Supertest is an API testing library. Unlike tape, we don’t just test functions. We create fake requests and use them on our API to see if it works as expected. <p> <br>
  <p>
 Supertest is used in this workshop to simulate fake server requests without the need to have the server listening via a socket connection to respond to the requests. Fake requests are simply objects passed to your routes; </p>
 <table>
   <li>
   <tr><td>  const http = require('http');</td></tr>
   <tr><td>  const hostname = process.env.HOSTNAME || 'localhost';</td></tr>
   <tr><td>  const port = process.env.PORT || 4000;</td></tr>
   <tr><td>  http.createServer().listen(port, hostname, () => { <br>
  console.log(`Server running at port http://${hostname}:${port}`)<br>
});
</td></tr>
</li>
 </table>
 
  </ol>

   <ul>
   <h1> <strong> Test </strong> </h1>
   <li>npm install tape supertest tap-spec --save-dev </li>
    </ul>

    <p>Befor do project review this link <br>
https://github.com/ali-7/pg-workshop <br> 
https://github.com/ali-7/db-testing-ws <br> </p>
<ol>
<h1>Task 1: Setting up the database:</h2>
 <li>Connect to postgres, by typing psql or pgcli in the terminal.</li>
  <table>
   <li><tr><td>use these commands to create your database</td></tr>
   <tr><td>CREATE DATABASE db_name;</td></tr>
   <tr><td>CREATE USER user_name WITH SUPERUSER PASSWORD 'password';</td></tr>
   <tr><td>ALTER DATABASE db_name OWNER TO user_name;</td></tr> </li>
</table>
<li>Add a config.env file and add the database's url in this format: DB_URL = postgres://[username]:[password]@localhost:5432/[database]. </li>
</ol>
<hr>

<hr>
<ol>
<h1>Task 2: Getting data from the database</h1> 
<li> Your job now is to add to database/config/connection.js and database/queries/getData.js and refactor your controllers/index.js so that the response data comes from the users table in your database instead of from static.js.</li>
<li>In the terminal, connect to your database using pgcli postgres://[username]:[password]@localhost:5432/[database]. </li>
<li>Create a table </li>
<li> Inside database/queries/getData.js, write a SQL query that pulls the necessary data from your database</li>
<li> Change the /users function in controllers/index.js to call the getData query.</li>
</ol>
 <ol>
 <h1>Task 3: Adding data to the database </h1>
 <li>Open up index.html and uncomment the form</li>
 <li>Check that you can see an empty input box when you refresh your browser</li>
 <li>Inside database/queries/postData.js, write a SQL query that insert the necessary data into your database.</li>
 <li>Add a new endpoint to your router (/create-user) and find the way to handle it. </li>
  </ol>
