import { Router } from 'express';
import GetPlatesController from '../controllers/plates/GetPlatesController';
import ensureAuthenticated from '../middlewares/ensureAuthenthicated';

const platesRoutes = Router();

platesRoutes.get(
  '/:restaurant_id',
  ensureAuthenticated,
  (request, response) => {
    return new GetPlatesController().handle(request, response);
  },
);

export default platesRoutes;
