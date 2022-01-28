import { Router } from 'express';
import GetRestaurantByIdController from '../controllers/restaurants/GetRestaurantByIdController';
import GetRestaurantsController from '../controllers/restaurants/GetRestaurantsController';
import SearchRestaurantsController from '../controllers/restaurants/SearchRestaurantsController';
import ensureAuthenticated from '../middlewares/ensureAuthenthicated';

const restaurantsRoutes = Router();

restaurantsRoutes.get('/', ensureAuthenticated, (request, response) => {
  return new GetRestaurantsController().handle(request, response);
});

restaurantsRoutes.get(
  '/:part_name',
  ensureAuthenticated,
  (request, response) => {
    return new SearchRestaurantsController().handle(request, response);
  },
);

restaurantsRoutes.get(
  '/id/:restaurant_id',
  ensureAuthenticated,
  (request, response) => {
    return new GetRestaurantByIdController().handle(request, response);
  },
);

export default restaurantsRoutes;
