"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetRestaurantByIdController_1 = __importDefault(require("../controllers/restaurants/GetRestaurantByIdController"));
const GetRestaurantsController_1 = __importDefault(require("../controllers/restaurants/GetRestaurantsController"));
const SearchRestaurantsController_1 = __importDefault(require("../controllers/restaurants/SearchRestaurantsController"));
const ensureAuthenthicated_1 = __importDefault(require("../middlewares/ensureAuthenthicated"));
const restaurantsRoutes = (0, express_1.Router)();
restaurantsRoutes.get('/', ensureAuthenthicated_1.default, (request, response) => {
    return new GetRestaurantsController_1.default().handle(request, response);
});
restaurantsRoutes.get('/:part_name', ensureAuthenthicated_1.default, (request, response) => {
    return new SearchRestaurantsController_1.default().handle(request, response);
});
restaurantsRoutes.get('/id/:restaurant_id', ensureAuthenthicated_1.default, (request, response) => {
    return new GetRestaurantByIdController_1.default().handle(request, response);
});
exports.default = restaurantsRoutes;
