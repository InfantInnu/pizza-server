const mongoose = require("mongoose");
require("colors");
require('dotenv').config();

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    const conn = await mongoose.connect(url, {
      
      useNewUrlParser: true,
      
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
// const user = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.xevcvwa.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlparser: true})
// .then(() => console.log('Database Connected Successfully'))
// .catch(err => console.log(err))

// // mongoose.connection.on('error', err => {
// //   console.log(err)
// // })