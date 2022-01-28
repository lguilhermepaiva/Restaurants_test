import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).send('Usuário não logado.');
  }

  const [, token] = authHeader.split(' ');

  try {
    verify(token, process.env.HASH_TOKEN as string);

    next();
  } catch {
    return response.status(401).send();
  }
}
