import { Request, Response } from "express";
import authService from "../../../../lib/auth";
import asyncHandeler from "../../../../utils/asyncHandeler";

const register =asyncHandeler (async (req: Request, res: Response) => {
  // Validated user data
  const validatedUserInfo = req.body;

  // Call userRegistreyion service for create user
  const user = await authService.register(req.body);

  res.status(201).json({
    success:true,
    status: 201,
    message: "User registered successfully",
    data: user,
  });
});

export default register;
