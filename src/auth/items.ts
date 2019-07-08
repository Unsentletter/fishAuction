import { db } from "../knexfile";

export const postItem = ({
  itemName,
  price,
  description,
  userId,
  location,
  species
}: {
  itemName: string;
  price: string;
  description: string;
  userId: string;
  location: string;
  species: string;
}): any => {
  return db("item_for_sale").insert({
    name: itemName,
    price,
    description,
    user_id: userId,
    location,
    species
  });

  // TODO -add description, expiry,
};

export const removeItem = () => {};
