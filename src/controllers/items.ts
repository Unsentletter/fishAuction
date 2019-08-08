import { Request, Response } from "express";

import * as items from "../auth/items";
import { db } from "../knexfile";

export const postItem = (req: Request, res: Response) => {
  // if (!req.body.itemName || !req.body.price || !req.body.description) {
  //   return res.status(400).send({ 'message': 'Some values are missing' });
  // }
  // console.log(req.body);
  const { itemName, price, description, user, location, species } = req.body;

  try {
    items
      .postItem({
        itemName: itemName,
        price: price,
        description: description,
        userId: user.user[0].id,
        location: location,
        species: species
      })
      .then((data: any) => {
        res.sendStatus(200);
      });
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const items: any = await db.select().from("item_for_sale");
    res.send(items);
  } catch (error) {
    return res.status(400).send(error);
  }
};
