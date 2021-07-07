const pgp = require("pg-promise")({});

const cn = {
  host: "localhost",
  port: 5432,
  database: "qbgapp",
  user: "postgres",
  password: "admin",
  max: 30, // use up to 30 connections
};


const config = parse(process.env.DATABASE_URL);

config.ssl = {
  rejectUnauthorized: false
};


const connectionString =  config || cn;

const db = pgp(connectionString);

module.exports = { db };
