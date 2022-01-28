import IUserRepository from '../../../repositories/interfaces/IUserRepository';
import { sign } from 'jsonwebtoken';

type Login = {
  status: number;
  message: string;
  email: string;
  token: string;
};

class SignInUser {
  constructor(private userRepository: IUserRepository) {}
  async execute(email: string, password: string): Promise<Login> {
    const userData = await this.userRepository.getByEmail(email);

    if (!userData) {
      return {
        status: 0,
        message: 'Usuário e/ou senha incorreto(s)',
        email,
        token: '',
      };
    }

    const passwordIsValid = await userData.verifyPassword(password);

    if (!passwordIsValid) {
      return {
        status: 0,
        message: 'Usuário e/ou senha incorreto(s)',
        email,
        token: '',
      };
    }

    const token = sign({}, process.env.HASH_TOKEN as string, {
      subject: userData.Id,
      expiresIn: '1d',
    });

    return { status: 1, message: 'Usuário autenticado', email, token };
  }
}

export default SignInUser;
