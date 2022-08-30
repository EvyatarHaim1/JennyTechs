const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    iso_code: Number,
    version: String,
    created_by: String,
    modified_by: String,
    category: String,
    company: String,
    status: String,
})

const Product = mongoose.model("products", productSchema)
module.exports = Product