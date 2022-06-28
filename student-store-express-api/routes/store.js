const express = require("express");
const Store = require("../models/Store");
const { BadRequestError } = require("../utils/errors");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send({
    products: Store.find(),
  });
});

routes.get("/purchases", (req, res) => {
  // We reverse it so its sorted by date
  res.send({
    purchases: Store.findPurchases().reverse(),
  });
});

routes.get("/:productId", (req, res) => {
  const { productId } = req.params;
  res.send({
    product: Store.findById(parseInt(productId)),
  });
});

routes.post("/", (req, res, next) => {
  const body = req.body;

  if (!body) {
    next(new BadRequestError("Body is required"));
    return;
  }

  if (!body.shoppingCart) {
    next(new BadRequestError("Shopping cart is required"));
    return;
  }

  if (!body.user) {
    next(new BadRequestError("User is required"));
    return;
  }

  if (body.shoppingCart.length === 0) {
    next(new BadRequestError("Shopping cart cannot be empty"));
    return;
  }

  // Check for duplicates and validate the data
  const productsIdSet = new Set();
  let totalCost = 0;
  const receipt = [];

  for (const product of req.body.shoppingCart) {
    // Check if it has valid fields
    if (!product.quantity || !product.itemId) {
      next(new BadRequestError("Missing fields inside Shopping Cart"));
      return;
    }

    // Check for duplicates
    if (productsIdSet.has(product.itemId)) {
      next(new BadRequestError("Duplicated Product inside Shopping Cart"));
      return;
    }
    productsIdSet.add(product.itemId);

    // Get other fields from product
    const productData = Store.findById(parseInt(product.itemId));

    // Make sure it exists
    if (!productData) {
      next(new BadRequestError("Product doesn't exist"));
      return;
    }

    // Calculate total price
    const productTotal = productData.price * product.quantity;
    totalCost += productTotal;
    receipt.push(
      `Bought ${product.quantity} ${
        productData.name
      } for $${productTotal.toFixed(2)}`
    );
  }

  const totalTaxCost = totalCost * 1.0875;
  receipt.push(`Subtotal: $${totalCost.toFixed(2)}`);
  receipt.push(`Total (including taxes): $${totalTaxCost.toFixed(2)}`);

  const orderObject = {
    id: Store.findPurchases().length + 1,
    name: body.user.name,
    email: body.user.email,
    order: body.shoppingCart,
    total: totalTaxCost.toFixed(2),
    createdAt: new Date().toISOString(),
    receipt: {
      userInfo: {
        name: body.user.name,
        email: body.user.email,
      },
      lines: receipt,
    },
  };

  Store.create(orderObject);
  res.status(201).send({ purchase: orderObject });
});

module.exports = routes;
