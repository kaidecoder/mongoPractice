import { MongoClient } from "mongodb";
import express from "express";
const app = express();


const connectionString = process.env.ATLAS_URI || "";

const PORT = process.env.PORT;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;

