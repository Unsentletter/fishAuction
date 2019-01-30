"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
(require('./knexfile'));
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
// TODO - update any type
exports.createUser = function (_a) {
    var email = _a.email, password = _a.password, username = _a.username, phone_number = _a.phone_number;
    console.log("Add user " + email + " with password " + password);
    var saltHash = saltHashPassword(password);
    return knex_1.default('user').insert({
        salt: saltHash.salt,
        encrypted_password: saltHash.hash,
        email: email,
        username: username,
        phone_number: phone_number
    });
};
// export const login = ({ email, password }: { email: string, password: string }) => {
//   console.log(`Authenticating user ${email}`);
//   return knex('user').where({ email })
//     // TODO - change any
//     .then((data: any) => {
//       if(!data) {
//         throw Error("No user data");
//       }
//       const hash = saltHashPassword(
//         password,
//         salt= data[0].salt
//       );
//
//       if (hash !== data[0].encrypted_password)  {
//         return
//       }
//       data[0].token = generateAuthToken(data[0]);
//       return data[0]
//     });
// };
exports.generateAuthToken = function (user) {
    return jwt.sign({
        id: user
    }, 'abc123').toString();
};
// TODO - replace any
var saltHashPassword = function (password, salt) {
    salt = salt ? salt : randomString();
    var hash = crypto.createHmac('sha512', salt).update(password);
    return { salt: salt, hash: hash.digest('hex') };
};
var randomString = function () {
    return crypto.randomBytes(4).toString('hex');
};
module.exports = {
    createUser: exports.createUser,
    // login,
    generateAuthToken: exports.generateAuthToken
};
//# sourceMappingURL=auth.js.map