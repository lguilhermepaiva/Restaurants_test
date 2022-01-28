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
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class SignInUser {
    constructor(userRepository) {
        Object.defineProperty(this, "userRepository", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: userRepository
        });
    }
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield this.userRepository.getByEmail(email);
            if (!userData) {
                return {
                    status: 0,
                    message: 'Usuário e/ou senha incorreto(s)',
                    email,
                    token: '',
                };
            }
            const passwordIsValid = yield userData.verifyPassword(password);
            if (!passwordIsValid) {
                return {
                    status: 0,
                    message: 'Usuário e/ou senha incorreto(s)',
                    email,
                    token: '',
                };
            }
            const token = (0, jsonwebtoken_1.sign)({}, process.env.HASH_TOKEN, {
                subject: userData.Id,
                expiresIn: '1d',
            });
            return { status: 1, message: 'Usuário autenticado', email, token };
        });
    }
}
exports.default = SignInUser;
