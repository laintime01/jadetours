const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());  // allow requests from all origins

// Connect to MongoDB
const { connectDB } = require('./db/mongoose');
connectDB();

// Routes
const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');

app.use('/auth', authRoutes);
app.use('/search', searchRoutes);

const Port = 8000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});


module.exports = app;
