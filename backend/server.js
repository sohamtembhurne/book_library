const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const booksRoutes = require('./routes/booksRoute');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/books', booksRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(5500, () => {
        console.log("Server up and running");
    });
}

module.exports = app;
