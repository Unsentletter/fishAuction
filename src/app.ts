import express from 'express';
import bodyParser from 'body-parser';

import * as userController from './controllers/user';

const app = express();

app.set('port', 5000);
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  next();
});

app.post('/createUser', userController.createUser);
// app.post('/login', userController.login);
app.get('/users/me', userController.getUser);

export default app;