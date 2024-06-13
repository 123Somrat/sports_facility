import UserInterface from "../../model/user/userInterface";
import jwt from "jsonwebtoken";

const generateToken = (paylode: UserInterface) => {
  const token = jwt.sign({ paylode }, process.env.JWT_HASH as string);
  return token;
};

export { generateToken };
