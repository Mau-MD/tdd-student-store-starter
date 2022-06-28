const { storage } = require("../data/storage");

class Store {
  static find() {
    return storage.get("products");
  }

  static findPurchases() {
    return storage.get("purchases");
  }

  static findById(id) {
    const products = storage.get("products");
    return products.filter((product) => product.id === id)[0];
  }

  static create(newProduct) {
    const currentProducts = storage.get("purchases");
    storage.set("purchases", [...currentProducts, newProduct]);
  }
}

module.exports = Store;
