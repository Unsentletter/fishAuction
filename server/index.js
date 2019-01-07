const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');
const { authenticate } = require('./middleware/authenticate');

const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  next();
});

// Create User
app.post('/createUser', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ 'message': 'Some values are missing' });
  }

  try {
    store.createUser({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      phone_number: req.body.phone_number
    }).then((user) => {
      console.log(user);
      const token = store.generateAuthToken(user);
      res.status(201).send(token)
    })
  } catch(err) {
    console.log("ERROR", err)
  }

});

app.post('/login', (req, res) => {
  store
    .login({
      email: req.body.email,
      password: req.body.password
    })
    .then((data) => {
      console.log(data)
      if(!success) {
        res.sendStatus(401)
      }
      const token = store.generateAuthToken(user);
      res.sendStatus(200).send(token);
    })
});

app.get('/users/me', authenticate, (req, res) => {
  console.log("USERS", req.body);
  res.send(req.user);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
});