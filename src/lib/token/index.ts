import UserInterface from "../../model/user/userInterface";
import jwt from "jsonwebtoken";

const generateToken = (paylode: UserInterface) => {
  const token = jwt.sign({ paylode }, process.env.JWT_HASH as string);
  return token;
};

const validateToken = async (token: string) => {
  try {
    const decodedData = jwt.verify(token, process.env.JWT_HASH as string);
    return decodedData;
  } catch (err) {
    console.log("i am from error", err);
  }
};

export { generateToken, validateToken };
