"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knexfile_1 = require("../knexfile");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
// TODO - update any type
exports.createUser = function (_a) {
    var email = _a.email, password = _a.password, username = _a.username, phone_number = _a.phone_number;
    console.log("Add user " + email + " with password " + password);
    var saltHash = saltHashPassword(password);
    return knexfile_1.db("user").insert({
        salt: saltHash.salt,
        encrypted_password: saltHash.hash,
        email: email,
        username: username,
        phone_number: phone_number
    });
};
exports.login = function (_a) {
    var email = _a.email, password = _a.password;
    console.log("Authenticating user " + email);
    return (knexfile_1.db("user")
        .where({ email: email })
        // TODO - change any
        .then(function (data) {
        if (!data) {
            throw Error("No user data");
        }
        var hashObject = saltHashPassword(password, data[0].salt);
        if (hashObject.hash !== data[0].encrypted_password) {
            console.log("HIT");
            return;
        }
        data[0].token = exports.generateAuthToken(data[0]);
        console.log("DATA", data);
        return data[0];
    }));
};
exports.generateAuthToken = function (user) {
    return jwt
        .sign({
        id: user
    }, "abc123")
        .toString();
};
// TODO - replace any
var saltHashPassword = function (password, salt) {
    console.log(password, salt);
    salt = salt ? salt : randomString();
    var hash = crypto.createHmac("sha512", salt).update(password);
    var hashDigest = hash.digest("hex");
    return { salt: salt, hash: hashDigest };
};
var randomString = function () {
    return crypto.randomBytes(4).toString("hex");
};
//# sourceMappingURL=auth.js.map