const express = require('express')
const router = express.Router()
const book = require('../models/book')

router.get('/', async (req, res) => {
    let books = []
    try {
        books = Book.find().sort({createdAt: 'desc'}).limit(10).exec()
    } catch (error) {
        books = []
    }
    res.render('index', {books:books })
})

module.exports = router