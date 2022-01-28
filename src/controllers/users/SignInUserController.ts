import { Request, Response } from 'express';
import SignInUser from '../../modules/users/useCases/SignInUser';
import Database from '../../database';
import UserRepository from '../../repositories/UserRepository';

class SignInUserController {
  private signInUser: SignInUser;
  constructor() {
    this.signInUser = new SignInUser(new UserRepository(Database.knexHelper));
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const responseSignIn = await this.signInUser.execute(email, password);

    if (responseSignIn.status === 0) {
      return response.status(401).send({
        status: 0,
        message: responseSignIn.message,
        email: responseSignIn.email,
        token: responseSignIn.token,
      });
    }

    return response
      .status(200)
      .send({
        status: 1,
        message: responseSignIn.message,
        email: responseSignIn.email,
        token: responseSignIn.token,
      });
  }
}

export default SignInUserController;
