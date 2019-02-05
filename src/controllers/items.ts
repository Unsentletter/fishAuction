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
  } catch(err) {
    // TODO - Fix error message to something more appropriate
    console.log("This is the error message", err);
    throw new Error("Something went wrong");
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const items: any = await db.select().from('item_for_sale');
    res.send(items[0])
  } catch(error) {
    return res.status(400).send(error)
  }

};