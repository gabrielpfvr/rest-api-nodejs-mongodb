import mongoose from "mongoose";

mongoose.connect("CONNECTION_STRING_HERE");

let db = mongoose.connection;

export default db;