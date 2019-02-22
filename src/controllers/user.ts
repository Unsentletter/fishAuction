import { Request, Response } from "express";
import * as auth from '../auth/auth';

export const createUser = (req: Request, res: Response) => {
  console.log("CREATE_USER");
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ 'message': 'Some values are missing' });
  }

  try {
    auth.createUser({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      phone_number: req.body.phone_number
      // TODO - Fix any type
    }).then((user: any) => {
      console.log("CreateUser", user);
      const token = auth.generateAuthToken(user);
      res.status(201).send(token)
    })
  } catch(err) {
      console.log("ERROR", err)
  }
};

export const login = (req: Request, res: Response) => {
  auth
    .login({
      email: req.body.email,
      password: req.body.password
    })
    .then((user: any) => {
      if(!user) {
        res.sendStatus(401)
        return;
      }
      console.log(user.token)
      const token = user.token;
      res.status(200)
        .send(token);
    })
};

export const getUser = (req: Request, res: Response) => {
  console.log("USERS", req.body);
  res.send(req.body.user);
};

