import mongoose from "mongoose";

const db = async (mongo_uri) => {
  await mongoose
    .connect(mongo_uri)
    .then(() => console.log("Connected to database"));
};

export default db;
