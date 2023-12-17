import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
    const [bookList, setBookList] = useState([]);
    const [newBook, setNewBook] = useState('');
    const [deleteBook, setDeleteBook] = useState('');
    const [updateOriginalBook, setUpdateOriginalBook] = useState('');
    const [updateNewBook, setUpdateNewBook] = useState('');

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const response = await axios.get('http://localhost:5500/books');
        setBookList(response.data);
    };

    const addBook = async () => {
        const response = await axios.post('http://localhost:5500/books', {
            book: newBook,
        });

        if (response.status === 201) {
            getBooks();
        } else {
            console.error('Failed to add book');
        }
    };

    const deleteBookHandler = async () => {
        const response = await axios.delete('http://localhost:5500/books', {
            data: { book: deleteBook },
        });

        if (response.status === 200) {
            getBooks();
        } else {
            console.error('Failed to delete book');
        }
    };

    const updateBook = async () => {
        const response = await axios.patch('http://localhost:5500/books', {
            original_book: updateOriginalBook,
            new_book: updateNewBook,
        });

        if (response.status === 200) {
            getBooks();
        } else {
            console.error('Failed to update book');
        }
    };

    const booksArray = typeof bookList === 'string' ? bookList.split(',') : [];

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex bg-white shadow-lg rounded-lg p-8 w-4/5">
                {/* Book List */}
                <div className="overflow-y-auto max-h-128 w-1/2 p-4">
                    {bookList.length > 0 ? (
                        <div className="space-y-4">
                            {booksArray.map((book, index) => (
                                <div key={index} className="p-4 bg-blue-200 rounded-md">
                                    {book}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No books available.</p>
                    )}
                </div>

                {/* Options */}
                <div className="p-4 bg-white rounded-md shadow-md space-y-4">
                    <h2 className="text-xl font-bold mb-4">Options</h2>

                    <div>
                        <label className="block mb-2">Add a Book:</label>
                        <input
                            type="text"
                            value={newBook}
                            onChange={(e) => setNewBook(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter book name"
                        />
                        <button onClick={addBook} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                            Add Book
                        </button>
                    </div>

                    <div>
                        <label className="block mb-2">Delete a Book:</label>
                        <input
                            type="text"
                            value={deleteBook}
                            onChange={(e) => setDeleteBook(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter book name"
                        />
                        <button onClick={deleteBookHandler} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">
                            Delete Book
                        </button>
                    </div>

                    <div>
                        <label className="block mb-2">Update a Book:</label>
                        <input
                            type="text"
                            value={updateOriginalBook}
                            onChange={(e) => setUpdateOriginalBook(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mb-2"
                            placeholder="Enter original book name"
                        />
                        <input
                            type="text"
                            value={updateNewBook}
                            onChange={(e) => setUpdateNewBook(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mb-2"
                            placeholder="Enter new book name"
                        />
                        <button onClick={updateBook} className="bg-green-500 text-white px-4 py-2 rounded-md">
                            Update Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
