import { Knex as IKnex } from 'knex';

export type QueryBuilder = IKnex.QueryBuilder;
export type QueryRaw<T> = IKnex.Raw<{ rows: T }>;
export type TransactionDb = IKnex.Transaction;
export type Connection = IKnex;

export default interface IKnexHelper {
  beginTransaction(): Promise<TransactionDb>;
  query(table: string): QueryBuilder;
  raw<T = any>(query: string, args?: Array<string | number>): QueryRaw<T>;
  closeConnection(): Promise<void>;
}
