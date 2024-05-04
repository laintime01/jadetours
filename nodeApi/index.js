const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());  // allow requests from all origins

const { connectDB } = require('./db/mongoose'); // Connect to MongoDB
connectDB();

app.use(require('./middleware/xmlToJsonMiddleware'));

const authRoutes = require('./routes/auth');
const searchFlightRoutes = require('./routes/searchFlight');
const searchHotelRoutes = require('./routes/searchHotel');

app.use('/auth', authRoutes);
app.use('/flight', searchFlightRoutes);
app.use('/hotel', searchHotelRoutes);


const Port = 8000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});


module.exports = app;
