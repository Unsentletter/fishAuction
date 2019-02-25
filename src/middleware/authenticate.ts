import { db } from '../knexfile';
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from "express";

// TODO - Redo any type
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.headers['token'];

  if(!token) {
    console.log("No token");
    return res
      .status(400)
      .send({ 'message': 'Token is not provided' });
  }

  try {
    const decoded: any = await jwt.verify(token, 'abc123');
    console.log(1111111111, decoded.id.id);
    const user = await db('user').where({id: decoded.id.id});

    req.body.user = { user };
    next();
  } catch(error) {
    return res.status(400).send(error);
  }
  next()
};