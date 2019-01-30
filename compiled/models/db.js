"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client = __importStar(require("knex"));
var Database;
(function (Database) {
    Database.knex = client({
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            database: 'fish_auction'
        },
        pool: {
            min: 2,
            max: 10
        },
        debug: true,
    });
})(Database = exports.Database || (exports.Database = {}));
//# sourceMappingURL=db.js.map