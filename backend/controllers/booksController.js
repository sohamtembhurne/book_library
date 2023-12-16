const bookService = require('../services/bookService');

const getBooks = (req, res) => {
    bookService.getAllBooks((error, bookListString) => {
        if (error) {
            res.sendStatus(500);
        } else {
            res.send(bookListString);
        }
    });
}

const addBook = (req, res) => {
    const { book } = req.body;
    bookService.addBook(book, (error, message) => {
        if (error) {
            res.status(500).send('Internal Server Error')
        } else {
            res.send(message);
        }
    });
}

const deleteBook = (req, res) => {
    const { book } = req.body;
    bookService.deleteBook(book, (error, message) => {
        if (error) {
            res.status(500).send('Internal Server Error');
        } else {
            res.send(message);
        }
    });
}

const updateBook = (req, res) => {
    const { original_book, new_book } = req.body;
    bookService.updateBook(original_book, new_book, (error, message) => {
        if (error) {
            res.status(500).send('Internal Server Error')
        } else {
            res.send(message);
        }
    });
}

const saveBooks = (req, res) => {
    try {
        const initialResult = {};
        bookService.saveBookList(initialResult, 0, 0, (error, responseObj) => {
            if (error) {
                res.status(500).send('Internal Server Error');
            } else {
                res.json(responseObj);
            }
        });
    } catch (error) {
        res.sendStatus(500);
    }
}

const updateBookListInDatabase = (callback) => {
    bookService.saveBookList({}, 0, 0, (error, result) => {
        if (error) {
            callback("Failed to update book list in the database");
        } else {
            callback(null, "Book list updated successfully");
        }
    });
};

module.exports = {
    getBooks,
    addBook,
    deleteBook,
    updateBook,
    updateBookListInDatabase,
    saveBooks
};
