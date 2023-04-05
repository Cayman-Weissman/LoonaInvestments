const mongoose = require('mongoose')
const mongoURI = process.env.DB;
const Schema = mongoose.Schema;
const db = mongoose.connection;
async function mongo() {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  console.log("Successfully connected to Mongo database!");

  return mongoose;
}

module.exports = mongo;