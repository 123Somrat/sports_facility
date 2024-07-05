import { Schema, model } from "mongoose";
import { UserInterface, UserMethods, UserModel } from "./userInterface";

type UpdatesObject = {
  $inc: { failedLoginAttempts: number };
  $set?: { lockUntil?: number; failedLoginAttempts?: number };
};

const userSchema = new Schema<UserInterface, UserModel, UserMethods>(
  {
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
    },
    failedLoginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
      default: null,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

userSchema.methods.incrementFaildLogin = async function incrementFaildLogin() {
  return this;
};



const userModel = model<UserInterface, UserModel>("user", userSchema);

export default userModel;
