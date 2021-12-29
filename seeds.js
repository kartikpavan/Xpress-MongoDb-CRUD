// Seperate file for injecting Data to Database irrespective of Main Web App
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("MongoDb Connection Established");
  })
  .catch((err) => {
    console.log("oh uh !! something went wrong");
    console.log(err);
  });

const seedProducts = [
  {
    name: "pineapple",
    price: 80,
    category: "fruit",
  },
  {
    name: "beans",
    price: 45,
    category: "vegetable",
  },
  {
    name: "Butter",
    price: 30,
    category: "dairy",
  },
  {
    name: "cheese",
    price: 75,
    category: "dairy",
  },
];
Product.insertMany(seedProducts)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// const p = new Product({
//   name: "Grapes",
//   price: "120",
//   category: "fruit",
// });
// p.save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
