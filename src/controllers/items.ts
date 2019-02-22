import {Request, Response} from "express";

import * as items from '../auth/items';
import {db} from "../knexfile";

export const postItem = (req: Request, res: Response) => {
  console.log("POST ITEM", req.body);
  console.log("POST ITEM", req.body.user.user[0].id);


  // if (!req.body.itemName || !req.body.price || !req.body.description) {
  //   return res.status(400).send({ 'message': 'Some values are missing' });
  // }
  // console.log(req.body);

  try {
    items.postItem({
      itemName: req.body.itemName,
      price: req.body.price,
      description: req.body.description,
      userId: req.body.user.user[0].id
    }).then((item: any) => {
      // TODO -
      console.log("ITEM", item);
      res.status(200)
    })
  } catch(error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const items: any = await db.select().from('item_for_sale');
    console.log(items);
    res.send(items)
  } catch(error) {
    return res.status(400).send(error)
  }

};