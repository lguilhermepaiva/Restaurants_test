"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetRestaurants_1 = __importDefault(require("../../modules/restaurants/useCases/GetRestaurants"));
const RestaurantRepository_1 = __importDefault(require("../../repositories/RestaurantRepository"));
const database_1 = __importDefault(require("../../database"));
class GetRestaurantsController {
    constructor() {
        Object.defineProperty(this, "getRestaurants", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.getRestaurants = new GetRestaurants_1.default(new RestaurantRepository_1.default(database_1.default.knexHelper));
    }
    handle(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurants = yield this.getRestaurants.execute();
            return response.status(200).send(restaurants);
        });
    }
}
exports.default = GetRestaurantsController;
