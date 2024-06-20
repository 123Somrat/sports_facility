import UserInterface from "../../model/user/userInterface";
import userService from "../user";
import { generateHash, mathingHased } from "../../utils/hasing";
import { generateToken } from "../token";

type loginDataType = {
    email:string,
    password : string
}



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


/**
 * @param paylode 
 * return JWt token
 */
const loginUser =async (paylode:loginDataType)=>{
   
   const user = await userService.findUserByEmail(paylode.email);
   if (!user) {
      throw new Error("Invalid Credentials");
    }

     const hasMathed = await mathingHased(paylode.password,user.password)
     
      if(!hasMathed){
          throw new Error('Invalid Credential')
      }
      

        const paylodes = {
             id:user._id,
             role:user.role
        }

      const access_token = generateToken(paylodes);
     
       return { user ,access_token }

}




export = { register , loginUser };
