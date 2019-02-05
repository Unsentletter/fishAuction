import { db } from '../knexfile';
import crypto = require('crypto');
import jwt = require('jsonwebtoken');

// TODO - update any type
export const createUser = ({ email, password, username, phone_number }: { email: string, password: string, username:string, phone_number:string }): any => {
  console.log(`Add user ${email} with password ${password}`);
  const saltHash = saltHashPassword(password);

  return db('user').insert({
    salt: saltHash.salt,
    encrypted_password: saltHash.hash,
    email,
    username,
    phone_number
  });
};


export const login = ({ email, password }: { email: string, password: string }) => {
  console.log(`Authenticating user ${email}`);
  return db('user').where({ email })
    // TODO - change any
    .then((data: any) => {
      if(!data) {
        throw Error("No user data");
      }
      const hash = saltHashPassword(
        password,
        data[0].salt
      );

      if (hash !== data[0].encrypted_password)  {
        return
      }
      data[0].token = generateAuthToken(data[0]);
      return data[0]
    });
};

export const generateAuthToken = (user: string) => {
  return jwt.sign({
    id: user
  }, 'abc123').toString();
};

// TODO - replace any
const saltHashPassword = (password: string, salt?: string) => {
  console.log(password, salt);
  salt = salt ? salt : randomString();
  const hash = crypto.createHmac('sha512', salt).update(password);
  return {salt, hash: hash.digest('hex')}
};

const  randomString = () => {
  return crypto.randomBytes(4).toString('hex')
};