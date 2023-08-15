const Product = require("../models/product_model")

module.exports.apiTest = (req, res) => {
    res.json({message: "ok"})
}

module.exports.allProd = (req, res) => {
    Product.find()
        .then((prodList)=> {
            res.json(prodList)
        })
        .catch(err => res.json (err))

}

module.exports.oneProd = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((oneProd)=> {res.json(oneProd)})
        .catch(err => res.json (err))

}

module.exports.addProd = (req, res) => {
    Product.create(req.body)
        .then(newProd => res.json (newProd))
        .catch(err => res.json (err))
}

module.exports.updateProd = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updateProd=> {res.json(updateProd)})
    .catch(err => res.json (err))
}

module.exports.deleteProd = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(status => res.json( status ))
    .catch(err => res.json(err));
}