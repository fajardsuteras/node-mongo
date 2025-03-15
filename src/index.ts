import express from "express"; 
import router from "./routes/api"; 
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express(); 
const PORT = process.env.PORT; 
const uri = process.env.MONGO_URI as string;

if (!uri) {
    console.error("Missing MONGO_URI in .env file");
    process.exit(1);
  }
  
  
app.use('/api', router); 

app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
    mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Connection error:", err));
});