const express = require('express')

const router = express.Router()

// GET all products
router.get('/', (req, res) => {
    res.json({mssg: 'getting all products'})
})

// GET a single product
router.get('/:id', (req, res) => {
    res.json({mssg: 'getting a single product'})
})

// CREATE a new product
router.post('/', (req, res) => {
    res.json({mssg: 'creating a new product'})
})

// UPDATE a product
router.patch('/:id', (req, res) => {
    res.json({mssg: 'updating a product'})
})

// DELETE a product
router.delete('/:id', (req, res) => {
    res.json({mssg: 'deleting a product'})
})

module.exports = router