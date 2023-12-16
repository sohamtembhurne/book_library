let books = [
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "One Hundred Years of Solitude",
    "The Catcher in the Rye",
    "The Lord of the Rings",
    "Harry Potter and the Sorcerer's Stone",
    "The Hunger Games",
    "The Da Vinci Code"
];

const getBookList = (list, index, callback) => {
    if (index >= books.length) {
        callback(null, list.join(','));
        return;
    }

    getBookList([...list, books[index]], index + 1, callback);
};

const saveItemOnDatabase = (name, callback) => {
    const delay = Math.round(Math.random() * name.length * 10);
    setTimeout(() => callback(delay), delay);
};

const saveBookList = (result, index, accDelay, callback) => {
    if (index >= books.length) {
        return callback(null, result);
    }

    const currentBook = books[index];
    saveItemOnDatabase(currentBook, (delay) => {
        const newResult = {
            ...result,
            [currentBook]: accDelay + delay,
        };
        saveBookList(newResult, index + 1, accDelay + delay, callback);
    });
};

const getAllBooks = (callback) => {
    getBookList([], 0, callback);
};

const addBook = (book, callback) => {
    if (!book || books.includes(book)) {
        callback(null, "Book already exists");
        return;
    }

    books.push(book);
    callback(null, "Book added successfully");
};

const deleteBook = (book, callback) => {
    const idx = books.indexOf(book);
    if (idx === -1) {
        callback(null, "No book found");
    } else {
        books.splice(idx, 1);
        callback(null, "Book deleted successfully");
    }
};

const updateBook = (originalBook, newBook, callback) => {
    const idx = books.indexOf(originalBook);
    if (idx === -1) {
        callback("Book not exists");
    } else {
        books[idx] = newBook;
        callback(null, "Book updated successfully");
    }
};

module.exports = {
    getBookList,
    saveItemOnDatabase,
    saveBookList,
    getAllBooks,
    addBook,
    deleteBook,
    updateBook
};
