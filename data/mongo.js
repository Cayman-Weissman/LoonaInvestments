const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://caymanweissman:Fluffy8$!@cluster0.pql28g1.mongodb.net/?retryWrites=true&w=majority'
const Schema = mongoose.Schema;
async function mongo() {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Successfully connected to Mongo database!");

  return mongoose;
}


module.exports = mongo;
