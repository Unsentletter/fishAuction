import { db } from '../knexfile';

export const postItem = ({ itemName, price, description, userId }: {itemName: string, price: string, description: string, userId: string}): any => {
    console.log("POST ITEM NAME", itemName, price, description, userId);

  return db('item_for_sale').insert({
    name: itemName,
    price: price,
    // description: description,
    user_id: userId
  })

  // TODO -add description, expiry,
};

export const removeItem = (() => {});

