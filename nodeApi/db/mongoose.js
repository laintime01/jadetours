const mongoose = require('mongoose');
require ('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  console.log(process.env.MONGOURI);
    try{
      await mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    }
    catch(err){
      console.error(err.message);
      process.exit(1);
    }
  }

module.exports = { connectDB };
