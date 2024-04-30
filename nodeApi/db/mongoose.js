const mongoose = require('mongoose');
require ('dotenv').config();

console.log("URL->"+ process.env.MONGOURI);

const connectDB = async () => {
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
