import { Request, Response } from "express";
import authService from "../../../../lib/auth";
import asyncHandeler from "../../../../utils/asyncHandeler";


const login = asyncHandeler(async (req: Request, res: Response) => {
  const { user, access_token } = await authService.loginUser(req.body);

  // TransFormed user data
  const trandFormedUserData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone,
    address: user.address,
  };

  res.status(200).json({
    success: true,
    status: 200,
    message: "User logged in successfully",
    access_token: access_token,
    data: trandFormedUserData,
  });
});

export default login;
