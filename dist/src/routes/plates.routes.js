"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetPlatesController_1 = __importDefault(require("../controllers/plates/GetPlatesController"));
const ensureAuthenthicated_1 = __importDefault(require("../middlewares/ensureAuthenthicated"));
const platesRoutes = (0, express_1.Router)();
platesRoutes.get('/:restaurant_id', ensureAuthenthicated_1.default, (request, response) => {
    return new GetPlatesController_1.default().handle(request, response);
});
exports.default = platesRoutes;
