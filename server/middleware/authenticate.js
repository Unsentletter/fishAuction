const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  console.log("AUTH", req.headers['token']);
  const token = req.headers['token'];

  if(!token) {
    return res.status(400).send({ 'message': 'Token is not provided' });
  }

  try {
    const decoded = await jwt.verify(token, 'abc123');
    const user = await knex('user').where({id: decoded.id[0]});

    req.user = { user };
    next();
  } catch(error) {
    return res.status(400).send(error);
  }
  next()
};

module.exports = { authenticate };
