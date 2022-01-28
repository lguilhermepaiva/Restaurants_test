import ConnectionDb from "./ConnectionDb";

import KnexHelper from "./KnexHelper";

class Database {
  static knexHelper: KnexHelper;

  static async init(): Promise<void> {
    const db = await ConnectionDb.create();

    this.knexHelper = new KnexHelper(db);
  }

  static async close(): Promise<void> {
    await this.knexHelper.closeConnection();
  }
}

export default Database;
