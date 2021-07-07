const pgp = require("pg-promise")({});

const cn = {
  host: "localhost",
  port: 5432,
  database: "qbgapp",
  user: "postgres",
  password: "admin",
  max: 30, // use up to 30 connections
};



const connectionString =  process.env.DATABASE_URL || cn;

const db = pgp(connectionString);

module.exports = { db };
