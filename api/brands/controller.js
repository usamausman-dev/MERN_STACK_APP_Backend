const { Brand } = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()

const AddBrand = async (req, res) => {
    const { BrandName, BrandImage } = req.body
    if (!BrandName || !BrandImage) {
        res.json({
            message: "Please Insert Proper Values"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            console.log("DB Connected")

            const checkExisting = await Brand.findOne({ BrandName })

            if (checkExisting) {
                res.status(403).json({
                    message: "Brand Already Exists"
                })
            }

            else {
                await Brand.create({ BrandName, BrandImage })
                const brands = await Brand.find()
                res.status(201).json({
                    message: "Brand Created Successfully",
                    brands: brands
                })
            }
        }

        catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}

const brandByID = async (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        res.status(400).json({
            message: "Please give the Brand ID",
            
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const brand = await Brand.findOne({ _id })
            res.json({ brand })

        } catch (error) {
            res.status(400).json({
                message: error.message
            })

        }
    }

}

const getAllBrands = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
        const brands = await Brand.find()
        res.status(200).json({
            brands
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })
    }

}

const deleteBrand = async (req, res) => {
    const { _id } = req.body;

    if (!_id) {
        res.status(400).json({
            message: "Please give the Brand ID"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            await Brand.deleteOne({ _id })
            const allbrands = await Brand.find()

            res.json({
                message: "Successfully Deleted",
                brands: allbrands
            })


        } catch (error) {
            res.status(400).json({
                message: error.message
            })

        }
    }

}

const updateBrand = async (req, res) => {
    const { _id, BrandName, BrandImage } = req.body;

    const filter = { _id };
    const update = { BrandName, BrandImage };




    if (!_id) {
        res.status(400).json({
            message: "Please give the Brand ID"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const brands = await Character.findOneAndUpdate(filter, update, { new: true });

            res.json({
                message: "Sucess",
                brands
            })



        } catch (error) {
            res.status(400).json({
                message: error.message
            })

        }
    }

}

module.exports = { AddBrand, brandByID, getAllBrands, updateBrand, deleteBrand }