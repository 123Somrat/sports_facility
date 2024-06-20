import http from "http";
import app from "./app";
import dotenv from 'dotenv';
import connectDB from "./db/connectDB";

dotenv.config()
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
    await connectDB()
  server.listen(port,async() => {
    console.log(`app is listening on port ${port}`);
  });
};

main();
