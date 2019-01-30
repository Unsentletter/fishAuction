"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO - Redo any type
// export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
//   const token: any = req.headers['token'];
//   console.log("Auth middleware", token);
//
//   if(!token) {
//     console.log("No token");
//     return res
//       .status(400)
//       .send({ 'message': 'Token is not provided' });
//   }
//
//   try {
//     const decoded = await jwt.verify(token, 'abc123');
//     const user = await knex('user').where({id: decoded});
//
//     req.body.user = { user };
//     next();
//   } catch(error) {
//     return res.status(400).send(error);
//   }
//   next()
// };
//# sourceMappingURL=authenticate.js.map