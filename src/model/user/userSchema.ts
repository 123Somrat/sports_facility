import { Schema, model } from "mongoose";
import UserInterface from "./userInterface";

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user",
  },
  address: {
    type: String,
    required: true,
  }
},{timestamps:true});


const userModel = model<UserInterface>('user',userSchema);


export default userModel