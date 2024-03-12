import express from "express";
import { createUser, signInUser } from "../controllers/user.js";
import {
  signInValidator,
  signUpValidator,
  validate,
} from "../middlewares/validator.js";

const userRouter = express.Router();

userRouter.post("/sign-up", signUpValidator, validate, createUser);
userRouter.post("/sign-in", signInValidator, signInUser);

export default userRouter;
