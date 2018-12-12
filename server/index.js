const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');

const app = express();

app.use(bodyParser.json());

// Create User
app.post('/createUser', (req, res) => {
  store.createUser({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    phoneNumber: req.body.phoneNumber
  }).then(() => {
    res.sendStatus(200)
  })
});

app.post('/login', (req, res) => {
  store
    .authenticate({
      email: req.body.email,
      password: req.body.password
    })
    .then(({success}) => {
      if(!success) {
        res.sendStatus(401)
      }

      res.sendStatus(200);
    })
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
});