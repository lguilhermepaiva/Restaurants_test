import { uuid as uuidv4 } from 'uuidv4';
import * as argon2 from 'argon2';

class User {
  Id: string;
  Email: string;
  Password: string;

  constructor(email: string, password: string) {
    this.Id = uuidv4();
    this.Email = email;
    this.Password = password;
  }

  async verifyPassword(password: string): Promise<boolean> {
    if (await argon2.verify(this.Password, password)) {
      return true;
    }
    return false;
  }
}

export default User;
