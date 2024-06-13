import UserInterface from "../../model/user/userInterface";
import userService from "../user";
import { generateHash } from "../../utils/hasing";

/**
 *
 * @param paylode
 * @returns Created User
 */
const register = async (paylode: UserInterface) => {
  // Checking user exeist ir not
  const hasUser = await userService.userExeist(paylode.email);

  if (hasUser) {
    throw new Error("User already exeist");
  }

  // Hash the password
  paylode.password = await generateHash(paylode.password);

  // CReate user
  const user = await userService.createUser(paylode);
  return user;
};

export = { register };
