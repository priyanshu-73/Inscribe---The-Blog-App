import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";

// Configuring dotenv
dotenv.config();

// Connecting to database
db(process.env.MONGO_URI);

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
