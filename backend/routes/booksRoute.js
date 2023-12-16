const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getBooks);
router.post('/', booksController.addBook);
router.delete('/', booksController.deleteBook);
router.patch('/', booksController.updateBook);
router.put('/', booksController.saveBooks);

module.exports = router;
