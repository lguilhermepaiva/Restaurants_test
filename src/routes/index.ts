import { Router } from "express";
import platesRoutes from "./plates.routes";
import restaurantsRoutes from "./restaurants.routes";
import usersRoutes from "./users.routes";

const routes = Router();

routes.use("/restaurants", restaurantsRoutes);
routes.use("/plates", platesRoutes);
routes.use("/user", usersRoutes);

export default routes;
