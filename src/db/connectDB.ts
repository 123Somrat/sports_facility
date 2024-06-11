import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let connectionURL = process.env.DB_CONNECTION_URL as string;

connectionURL = connectionURL?.replace(
  "<username>",
  process.env.DB_USERNAME as string
);
connectionURL = connectionURL.replace(
  "<password>",
  process.env.DB_PASSWORD as string
);
connectionURL = `${connectionURL}/${process.env.DB_NAME}?${process.env.DB_QUERYSTRING}`;

const connectDB = async () => {
  await mongoose.connect(connectionURL);

  console.log("Db connect sucssefully");
};

export default connectDB;
