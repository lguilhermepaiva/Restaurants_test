import IKnexHelper, {
  Connection,
  QueryBuilder,
  QueryRaw,
  TransactionDb,
} from './interfaces/IKnexHelper';

export default class KnexHelper implements IKnexHelper {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  public async beginTransaction(): Promise<TransactionDb> {
    return this.connection.transaction();
  }

  public query(table: string): QueryBuilder {
    return this.connection.table(table);
  }

  public raw<T>(query: string, args?: Array<string | number>): QueryRaw<T> {
    if (args) return this.connection.raw(query, args);
    return this.connection.raw(query);
  }

  async closeConnection(): Promise<void> {
    await this.connection.destroy();
  }
}
