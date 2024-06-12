import UserInterface from "../../model/user/userInterface";
import userModel from "../../model/user/userSchema";

const registerUser = async (paylode: UserInterface) => {
  const user = await userModel.create(paylode);

  return user;
};
export default registerUser;
