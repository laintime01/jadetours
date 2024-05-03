const Flight = require('../models/flight');
const Hotel = require('../models/hotel');

const searchFlights = async (req, res) => {
  try {
    const { query } = req.params;
    const flights = await Flight.find({ $text: { $search: query } });
    res.status(200).json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const searchFlightsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const flights = await Flight.find({ status });
    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const searchFlightsByPriority = async (req, res) => {
  try {
    const { priority } = req.params;
    const flights = await Flight.find({
      priority: { $gte: priority }
    });
    res.json(flights);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// Hotel search controller
const searchHotels = async (req, res) => {
  try {
    const { query } = req.params;
    const hotels = await Hotel.find({ $text: { $search: query } });
    res.status(200).json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { searchFlights, searchFlightsByStatus, searchFlightsByPriority };
