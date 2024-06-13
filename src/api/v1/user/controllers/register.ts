import { Request, Response } from "express";
import authService from "../../../../lib/auth";

const register = async (req: Request, res: Response) => {
  // Validated user data
  const validatedUserInfo = req.body;

  // Call userRegistreyion service for create user
  const user = await authService.register(req.body);

  res.status(201).json({
    status: 201,
    code: "User Created Successfully",
    data: user,
  });
};

export default register;
