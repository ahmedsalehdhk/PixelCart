const express = require('express')
const router = express.Router()

// getting controller functions ~ logic behind each request
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controller/productController")


// GET all products
router.get('/', getProducts)

// GET a single product
router.get('/:id', getProduct)

// CREATE a new product
router.post('/', createProduct)

// UPDATE a product
router.patch('/:id', updateProduct)

// DELETE a product
router.delete('/:id', deleteProduct)

module.exports = router