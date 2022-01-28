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
class KnexHelper {
    constructor(connection) {
        Object.defineProperty(this, "connection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.connection = connection;
    }
    beginTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.connection.transaction();
        });
    }
    query(table) {
        return this.connection.table(table);
    }
    raw(query, args) {
        if (args)
            return this.connection.raw(query, args);
        return this.connection.raw(query);
    }
    closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.destroy();
        });
    }
}
exports.default = KnexHelper;
