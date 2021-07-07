const pgp = require("pg-promise")();


let ssl = null;
let pool = null; 

if (process.env.NODE_ENV === 'deploy') {
   ssl = {rejectUnauthorized: false};

   pool = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
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

const connectionString = pool || cn

const db = pgp(connectionString);

module.exports = { db };


//add heroku var : NODE_ENV = development
//https://www.javaniceday.com/post/pg-promise-self-signed-certificate-error-in-postgres
//https://help.heroku.com/MDM23G46/why-am-i-getting-an-error-when-i-upgrade-to-pg-8