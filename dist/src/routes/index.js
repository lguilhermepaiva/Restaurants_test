"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plates_routes_1 = __importDefault(require("./plates.routes"));
const restaurants_routes_1 = __importDefault(require("./restaurants.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const routes = (0, express_1.Router)();
routes.use("/restaurants", restaurants_routes_1.default);
routes.use("/plates", plates_routes_1.default);
routes.use("/user", users_routes_1.default);
exports.default = routes;
