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
const SignInUser_1 = __importDefault(require("../../modules/users/useCases/SignInUser"));
const database_1 = __importDefault(require("../../database"));
const UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
class SignInUserController {
    constructor() {
        Object.defineProperty(this, "signInUser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signInUser = new SignInUser_1.default(new UserRepository_1.default(database_1.default.knexHelper));
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const responseSignIn = yield this.signInUser.execute(email, password);
            if (responseSignIn.status === 0) {
                return response.status(401).send({
                    status: 0,
                    message: responseSignIn.message,
                    email: responseSignIn.email,
                    token: responseSignIn.token,
                });
            }
            return response
                .status(200)
                .send({
                status: 1,
                message: responseSignIn.message,
                email: responseSignIn.email,
                token: responseSignIn.token,
            });
        });
    }
}
exports.default = SignInUserController;
