"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
require("dotenv/config");
const DIR_MIGRATIONS = (0, path_1.resolve)(__dirname, "src", "database", "migrations");
const configDefault = {
    client: "pg",
    migrations: {
        tableName: "__Migrations",
        directory: DIR_MIGRATIONS,
    },
    timezone: "UTC",
};
const SSL = process.env.DB_SSL
    ? JSON.parse(String(process.env.DB_SSL))
    : undefined;
const connection = {
    database: "GraoMenus",
    user: "docker",
    password: "docker",
    host: "localhost",
    port: 5432,
};
Object.assign(connection, { ssl: SSL });
const configCliMigration = Object.assign(Object.assign({}, configDefault), { connection });
exports.default = {
    development: configCliMigration,
    staging: configCliMigration,
    production: configCliMigration,
};
