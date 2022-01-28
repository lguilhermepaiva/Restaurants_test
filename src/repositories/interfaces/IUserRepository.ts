import User from '../../modules/users/entities/User';

export default interface IUserRepository {
  getByEmail(email: string): Promise<User | null>;
}
