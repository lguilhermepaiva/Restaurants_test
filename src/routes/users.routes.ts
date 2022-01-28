import { Router } from "express";
import SignInUserController from "../controllers/users/SignInUserController";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return new SignInUserController().handle(request, response);
});

export default usersRoutes;
