const mongoose = require('mongoose');
const { connectDB } = require('./db/mongoose'); // Connect to MongoDB
const faker = require('faker');
const Hotel = require('./models/hotel');
const Flight = require('./models/flight');
const { fi } = require('faker/lib/locales');

connectDB();


// function to generate random data for flights and hotels
const generateData = async () => {
  try{
    for(let i = 0; i < 20; i++){
      const flight = new Flight({
        flightNumber: faker.random.alphaNumeric(6),
        departure: faker.address.city(),
        arrival: faker.address.city(),
        date: faker.date.future(),
        price: faker.datatype.number({min: 100, max: 500})
      });
      await flight.save();
    }
    for(let i = 0; i < 20; i++){
      const hotel = new Hotel({
        name: faker.company.companyName(),
        location: faker.address.city(),
        price: faker.datatype.number({min: 100, max: 500}),
        rating: faker.datatype.number({min: 1, max: 5})
      });
      await hotel.save();
    }
    console.log('Data generated successfully');
  }
  catch(err){
    console.error("Error generating data",err);
  }finally{
    mongoose.connection.close();
  }
}

generateData().catch(err => console.error(err));

