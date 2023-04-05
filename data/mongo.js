const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://caymanw:Fluffy8$!@cluster0.kgffzu8.mongodb.net/?retryWrites=true&w=majority'
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