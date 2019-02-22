"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knexfile_1 = require("../knexfile");
exports.postItem = function (_a) {
    var itemName = _a.itemName, price = _a.price, description = _a.description, userId = _a.userId;
    console.log("POST ITEM NAME", itemName, price, description, userId);
    return knexfile_1.db('item_for_sale').insert({
        name: itemName,
        price: price,
        // description: description,
        user_id: userId
    });
    // TODO -add description, expiry,
};
exports.removeItem = (function () { });
//# sourceMappingURL=items.js.map