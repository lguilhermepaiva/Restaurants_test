import IUserRepository from './interfaces/IUserRepository';
import IKnexHelper from '../database/interfaces/IKnexHelper';
import User from '../modules/users/entities/User';

class UserRepository implements IUserRepository {
  constructor(private em: IKnexHelper) {}

  async getByEmail(email: string): Promise<User | null> {
    const [user] = await this.em
      .query('Users')
      .select('*')
      .where({ Email: email });

    const userClass = Object.create(User.prototype);

    return user ? Object.assign(userClass, user) : null;
  }
}

export default UserRepository;
