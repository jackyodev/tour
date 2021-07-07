const pgp = require("pg-promise")({});





let ssl = null;
if (process.env.NODE_ENV === 'development') {
   ssl = {rejectUnauthorized: false};
}

const local = {
  host: "localhost",
  port: 5432,
  database: "qbgapp",
  user: "postgres",
  password: "admin",
  max: 30, // use up to 30 connections
};

let config = local;

if (process.env.NODE_ENV) {
config = {
  connectionString: process.env.DATABASE_URL,
  max: 30,
  ssl:ssl
};

}

//https://www.javaniceday.com/post/pg-promise-self-signed-certificate-error-in-postgres
//https://help.heroku.com/MDM23G46/why-am-i-getting-an-error-when-i-upgrade-to-pg-8

const connectionString =  config

console.log(connectionString);

const db = pgp(connectionString);

module.exports = { db };
