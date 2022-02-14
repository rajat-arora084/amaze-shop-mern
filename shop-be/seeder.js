import mongoose from "mongoose";
import dotenv from "dotenv";
import color from "colors";
import connectDB from "../shop-be/config/connect.js";
import Users from "./models/users.js";
import Products from "./models/product.js";
import Orders from "./models/orders.js";
import Product from "./models/product.js";
import users from "./data/user.js";
import products from "./data/products.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // await Users.deleteMany();
    // await Products.deleteMany();
    // await Orders.deleteMany();
    const insertedUsers = await Users.insertMany(users);
    const admin = insertedUsers[0]._id;
    const allProds = products.map((prod) => {
      return {
        ...prod,
        user: admin,
      };
    });
    await Products.insertMany(allProds);
    console.log("Users & Products added.".green);
  } catch (err) {
    console.log(`Some error occured ${err?.message}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Products.deleteMany();
    await Users.deleteMany();
    await Orders.deleteMany();
    console.log("All items deleted!".red);
  } catch (err) {
    console.log(`Some error occured while destroying data ${err?.message}`);
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
