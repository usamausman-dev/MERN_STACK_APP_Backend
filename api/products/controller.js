const { connect } = require("mongoose")
require('dotenv').config()
const Products = require('./model')

const getProducts = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const products = await Products.find()
        res.json({ products })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const postProducts = async (req, res) => {
    const { productName, thumbnail, description, price, category, brand, images } = req.body

    if (!productName || !thumbnail || !description || !price || !category || !brand || !images) {
        res.status(400).json({ message: 'Invalid Payload' })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const checkExisting = await Products.exists({ productName })
            if (checkExisting) {
                res.status(403).json({ message: "Product Already Exists" })
            }
            else {
                await Products.create({ productName, thumbnail, description, price, category, brand, images })
                const products = await Products.find()
                res.status(201).json({
                    message: "Product Created Successfully",
                    products
                })
            }

        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

}

const ProductbyBrand = async (req, res) => {
    const { brand } = req.params
    if (!brand) {
        res.status(403).json({ message: "Please Give BrandName" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Products.find({ brand })
        res.json({ products })
    }
}

const ProductbyCategory = async (req, res) => {
    const { category } = req.params
    if (!category) {
        res.status(403).json({ message: "Please Give Category Name" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Products.find({ category })
        res.json({ products })
    }
}

const ProductbyId = async (req, res) => {
    const { _id } = req.params
    if (!_id) {
        res.status(403).json({ message: "Please Give Product id" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Products.findOne({ _id })
        res.json({ products })
    }
}

module.exports = { getProducts, postProducts, ProductbyBrand, ProductbyCategory, ProductbyId }