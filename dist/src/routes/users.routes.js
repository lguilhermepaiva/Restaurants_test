"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignInUserController_1 = __importDefault(require("../controllers/users/SignInUserController"));
const usersRoutes = (0, express_1.Router)();
usersRoutes.post("/", (request, response) => {
    return new SignInUserController_1.default().handle(request, response);
});
exports.default = usersRoutes;
