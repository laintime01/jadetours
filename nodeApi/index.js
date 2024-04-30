const express = require('express');

const app = express();
app.use(express.json());

// Connect to MongoDB
const { connectDB } = require('./db/mongoose');
connectDB();

const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});


module.exports = app;
