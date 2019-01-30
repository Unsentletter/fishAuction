"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth = __importStar(require("../auth/auth"));
exports.createUser = function (req, res) {
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
        });
        //   .then((user: any) => {
        //   console.log("CreateUser", user);
        //   const token = auth.generateAuthToken(user);
        //   res.status(201).send(token)
        // })
    }
    catch (err) {
        console.log("ERROR", err);
    }
};
// export const login = (req: Request, res: Response) => {
//   auth
//     .login({
//       email: req.body.email,
//       password: req.body.password
//     })
//     .then((user: {}) => {
//       if(!user) {
//         res.sendStatus(401)
//         return;
//       }
//       // const token = user.token;
//       res.status(200)
//         // .send(token);
//     })
// };
exports.getUser = function (req, res) {
    console.log("USERS", req.body);
    res.send(req.body.user);
};
//# sourceMappingURL=user.js.map