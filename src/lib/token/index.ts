import UserInterface from "../../model/user/userInterface";
import jwt, { JwtPayload } from "jsonwebtoken";
import HttpError from "../../utils/httpError";

type paylode = {
  role: string;
};
const generateToken = (paylode: paylode) => {
  const expirationTime = Math.floor(Date.now() / 1000) + (10 * 60);
  const token = jwt.sign({ paylode }, process.env.JWT_HASH as string,{expiresIn:expirationTime});
  return token;
};

const validateToken = async (token: string) => {
  try {
    const decodedData = jwt.verify(token, process.env.JWT_HASH as string);
    return decodedData as JwtPayload;
  } catch (err) {
     throw new HttpError(403,'Access denied','Access denied');
  }
};

export { generateToken, validateToken };
