# Virtual Library Server

This is a virtual library server, built with Node.js and Express. This server provides various RESTful services, including:

- GET
- POST
- PATCH
- DELETE
- PUT

To facilitate testing, a suite of tests has been implemented and can be found in `server/tests/server.test.js`. Follow the steps below to set up and run the tests.

## Steps to Set Up Locally

### Clone the Repository
```bash
git clone https://github.com/sohamtembhurne/book_library.git
```

### Setting up Backend
Navigate to the server directory:
```bash
cd server/
```

Install dependencies:
```bash
npm install
```

Run the backend server:
```bash
npm start
```

The server will be running on [http://localhost:5500/](http://localhost:5500/).

Run tests:
```bash
npm test
```

### Setting up Frontend
Navigate to the client directory:
```bash
cd client/
```

Install dependencies:
```bash
npm install
```

Run the frontend:
```bash
npm start
```

Now you have both the backend and frontend set up locally.