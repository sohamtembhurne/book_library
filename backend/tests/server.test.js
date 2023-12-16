const request = require('supertest');
const app = require('../server')

describe('Testing Suite', () => {
    test('It should add a book successfully', async () => {
        const response = await request(app).post('/books').send({ book: 'TestBook' });
        expect(response.status).toBe(200);
    });

    test('It should fail to add duplicate books', async () => {
        const response1 = await request(app).post('/books').send({ book: 'duplicateBook' });
        const response2 = await request(app).post('/books').send({ book: 'duplicateBook' });
        expect(response1.status).toBe(200);
        expect(response2.status).toBe(200);
        expect(response2.text).toBe('Book already exists');
    });

    test('It should delete book if it exists', async () => {
        const response1 = await request(app).post('/books').send({ book: 'deleteBook' });
        const response2 = await request(app).delete('/books').send({ book: 'deleteBook' });
        expect(response1.status).toBe(200);
        expect(response1.text).toBe('Book added successfully');
        expect(response2.text).toBe('Book deleted successfully');
    });

    test('It should not delete book if it doesn\'t exist', async () => {
        const response = await request(app).delete('/books').send({ book: 'deleteBook' });
        expect(response.text).toBe('No book found');
    });

    test('It should retrieve the list of books', async () => {
        const response = await request(app).get('/books');
        expect(response.status).toBe(200);
    });

    test('It should update a book successfully', async () => {
        const response1 = await request(app).post('/books').send({ book: 'updateBook' });
        const response2 = await request(app).patch('/books').send({ original_book: 'updateBook', new_book: 'updatedBook' });
        expect(response1.status).toBe(200);
        expect(response1.text).toBe('Book added successfully');
        expect(response2.text).toBe('Book updated successfully');
    });

    test('It should update the book list in the database', async () => {
        const response = await request(app).put('/books');
        expect(response.status).toBe(200);
    });


});
