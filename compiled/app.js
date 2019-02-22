"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var authenticate_1 = require("./middleware/authenticate");
var userController = __importStar(require("./controllers/user"));
var itemController = __importStar(require("./controllers/items"));
var app = express_1.default();
app.set('port', 5000);
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    next();
});
app.post('/createUser', userController.createUser);
app.post('/login', userController.login);
app.get('/users/me', authenticate_1.authenticate, userController.getUser);
app.post('/post-item', authenticate_1.authenticate, itemController.postItem);
app.get('/get-items', itemController.getItems);
exports.default = app;
//# sourceMappingURL=app.js.map