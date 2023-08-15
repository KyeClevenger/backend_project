const ProdController = require("../controllers/product_controller")

module.exports = (app) => {
    app.get("/api/testing", ProdController.apiTest);
    app.get("/api/products", ProdController.allProd);
    app.get("/api/products/:id", ProdController.oneProd);
    app.post("/api/products", ProdController.addProd);
    app.patch("/api/products/:id", ProdController.updateProd);
    app.delete("/api/products/:id", ProdController.deleteProd);
}