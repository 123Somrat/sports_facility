import { Document } from 'mongoose';

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  address: string;
  failedLoginAttempts: number
  lockUntil: Date,
  incrementFailedLogin: () => Promise<any>; 
  resetLoginAttempts: () => Promise<any>;
}

export default UserInterface