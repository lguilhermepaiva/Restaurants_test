import { resolve } from "path";
import "dotenv/config";

const DIR_MIGRATIONS = resolve(__dirname, "src", "database", "migrations");

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

const configCliMigration = { ...configDefault, connection };

export default {
  development: configCliMigration,

  staging: configCliMigration,

  production: configCliMigration,
};
