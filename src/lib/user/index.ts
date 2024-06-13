import UserInterface from "../../model/user/userInterface";
import userModel from "../../model/user/userSchema";

/**
 *
 * @param email
 * @returns If user exeist retun true and not exeist then return fasle
 */
const userExeist = async (email: string) => {
  const hasUser = await userModel.findOne({ email });
  return hasUser ? true : false;
};

/**
 *
 * @param email
 * @returns
 */
const findUserByEmail = (email: string) => {
  const user = userModel.findOne({ email });
  return user;
};

/**
 *
 * @param paylode
 * @returns user
 */
const createUser = async (paylode: UserInterface) => {
  const user = userModel.create(paylode);
  return user;
};

export = { userExeist, createUser , findUserByEmail};
