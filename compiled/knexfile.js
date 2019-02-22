"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
exports.db = knex_1.default({
    client: 'mysql',
    connection: {
        user: 'root',
        password: 'password',
        database: 'fish_auction'
    }
});
// db('tableName').select('col1', 'col2').where('col1', 'test')
//# sourceMappingURL=knexfile.js.map