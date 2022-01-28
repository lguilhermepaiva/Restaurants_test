import knex, { Knex as IKnex } from "knex";

class ConnectionDb {
  private readonly config: IKnex.Config = {
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
  };

  private connection: IKnex;

  private static connectionDb: ConnectionDb;

  private constructor() {
    this.connection = knex(this.config);
    Object.freeze(this);
  }

  static async create(): Promise<IKnex> {
    if (!this.connectionDb) this.connectionDb = new ConnectionDb();
    await this.connectionDb.connection.raw("SELECT 1 AS TEST");
    return this.connectionDb.connection;
  }
}

export default ConnectionDb;
