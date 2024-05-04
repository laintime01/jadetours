const Flight = require('../models/flight');
const Hotel = require('../models/hotel');

// Flight search with multiple optional filters controller
const searchFlightsWithFilters = async (req, res) => {
  try{
    const { minPrice, maxPrice, departure, arrival, date } = req.query;
    let query = {};

    if(minPrice || maxPrice){

      query.price = {};

      if(minPrice){
        query.price.$gte = Number(minPrice);
      }
      if(maxPrice){
        query.price.$lte = Number(maxPrice);
      }
    }

    if(departure){
      query.departure = departure;
    }

    if(arrival){
      query.arrival = arrival;
    }

    if(date){
      query.date = date;
    }

    const flights = await Flight.find(query);
    res.status(200).json(flights);
  }catch(err){
    console.error(err);
    res.status(500).json({message: 'Server error'});
  }
}

// Hotel search with multiple optional filters controller
const searchHotelsWithFilters = async (req, res) => {
  try {
    // get the query parameters
    const { minPrice, maxPrice, location, name, rating } = req.query;

    // construct the query object
    let query = {};

   if(minPrice || maxPrice){

      query.price = {};

      if(minPrice){
        query.price.$gte = Number(minPrice);
      }
      if(maxPrice){
        query.price.$lte = Number(maxPrice);
      }
    }

    if (location) {
      query.location = location;
    }

    if (name) {
      query.name = { $regex: name, $options: 'i' }; // case-insensitive search
    }

    if (rating) {
      query.rating = Number(rating);
    }

    // run the query
    const hotels = await Hotel.find(query);
    res.status(200).json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}



module.exports = { searchFlightsWithFilters, searchHotelsWithFilters};
