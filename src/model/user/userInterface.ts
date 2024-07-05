import { Model , Document} from 'mongoose';

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  address: string;
  failedLoginAttempts: number
  lockUntil: Date | null,
}

interface UserMethods{
  incrementFaildLogin():  Promise<UserInterface>; // Define the type of the method
  resetLoginAttempts(): Promise<UserInterface>;

}

type UserModel = Model<UserInterface, {}, UserMethods>;

export {UserInterface ,UserMethods , UserModel}