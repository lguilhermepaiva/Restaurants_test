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
const knex_1 = __importDefault(require("knex"));
class ConnectionDb {
    constructor() {
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                client: "pg",
                connection: {
                    database: process.env.POSTGRES_DBNAME,
                    host: process.env.POSTGRES_HOST,
                    port: Number(process.env.POSTGRES_PORT),
                    user: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASS,
                    timezone: "UTC",
                },
                pool: { min: 1, max: Number(process.env.POSTGRES_MAX_POOL) || 10 },
            }
        });
        Object.defineProperty(this, "connection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.connection = (0, knex_1.default)(this.config);
        Object.freeze(this);
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connectionDb)
                this.connectionDb = new ConnectionDb();
            yield this.connectionDb.connection.raw("SELECT 1 AS TEST");
            return this.connectionDb.connection;
        });
    }
}
exports.default = ConnectionDb;
