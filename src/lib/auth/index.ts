import UserInterface from "../../model/user/userInterface";
import userService from "../user";
import { generateHash, mathingHased } from "../../utils/hasing";
import { generateToken } from "../token";
import HttpError from "../../utils/httpError";

type loginDataType = {
  email: string;
  password: string;
};

/**
 *
 * @param paylode
 * @returns Created User
 */
const register = async (paylode: UserInterface) => {
  // Checking user exeist ir not
  const hasUser = await userService.userExeist(paylode.email);

  if (hasUser) {
    throw new HttpError(409,"User already exeist",'Opps user alreday exeist');
  }

  // Hash the password
  paylode.password = await generateHash(paylode.password);

  // Create user
  const user = await userService.createUser(paylode);
  return user;
};

/**
 * @param paylode
 * return user , JWt token
 */
const loginUser = async (paylode: loginDataType) => {
     // find user by email
    const user = await userService.findUserByEmail(paylode.email);

    // if user not exeist throw 
    if (!user) {
      throw new HttpError(404,"Not found","User not exeist");
    }

       // Cheecking provided data
    const hasMathed = await mathingHased(paylode.password, user.password);

     // if data not matched throw 401 error
    if (!hasMathed) {
      throw new HttpError(401, "Invalid credentials", "Invalid credential");
    }

    // Create paylode to store data
    const paylodes = {
      id: user._id,
      role: user.role,
    };

    // Generate access token
    const access_token = generateToken(paylodes);


    // return user data and access token
    return { user, access_token };
  
};

export = { register, loginUser };
