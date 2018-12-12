const knex = require('knex')(require('./knexfile'));
const crypto = require('crypto');

module.exports = {
  createUser({ email, password, username, phoneNumber }) {
    console.log(`Add user ${email} with password ${password}`);
    const { salt, hash } = saltHashPassword({ password });
    return knex('user').insert({
      salt,
      encrypted_password: hash,
      email,
      username,
      phoneNumber
    })
  },
  authenticate({ email, password }) {
    console.log(`Authenticating user ${email}`);
    return knex('user').where({ email })
      .then(([user]) => {
        if(!user) {
          return { success: false }
        }
        const { hash } = saltHashPassword({
          password,
          salt: user.salt
        });
        return { success: hash === user.encrypted_password }
      });
  }
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