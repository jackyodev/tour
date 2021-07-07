const pgp = require("pg-promise")();


let ssl = null;
let pool = null; 

   ssl = {rejectUnauthorized: false};
   
   console.log(process.env.DATABASE_URL);

   pool = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }

const cn = {
  host: "localhost",
  port: 5432,
  database: "qbgapp",
  user: "postgres",
  password: "admin",
  max: 30, // use up to 30 connections
};

const connectionString =  pool;

const db = pgp(connectionString);

module.exports = { db };



//https://www.javaniceday.com/post/pg-promise-self-signed-certificate-error-in-postgres
//https://help.heroku.com/MDM23G46/why-am-i-getting-an-error-when-i-upgrade-to-pg-8