const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Price must be at least 1"],
        maxlength: [10, "Price must be at below 10"]
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 3 characters"]
    }

}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product