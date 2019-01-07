const knex = require('knex')(require('./knexfile'));
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const createUser = ({ email, password, username, phone_number }) => {
  console.log(`Add user ${email} with password ${password}`);
  const { salt, hash } = saltHashPassword({ password });

  return knex('user').insert({
    salt,
    encrypted_password: hash,
    email,
    username,
    phone_number
  });
};


const login = ({ email, password }) => {
  console.log(`Authenticating user ${email}`);
  return knex('user').where({ email })
    .then((data) => {
      console.log(data);
      if(!data) {
        console.log("FAILLLLL");
        return { success: false }
      }
      const { hash } = saltHashPassword({
        password,
        salt: data[0].salt
      });
      return { success: hash === data[0].encrypted_password }
    });
};

const generateAuthToken = (user) => {
  return jwt.sign({
    id: user
  }, 'abc123').toString();
};


function saltHashPassword({
  password,
  salt = randomString()
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password);
  return {
    salt,
    hash: hash.digest('hex')
  }
}

function randomString() {
  return crypto.randomBytes(4).toString('hex')
}

module.exports = {
  createUser,
  login,
  generateAuthToken
};