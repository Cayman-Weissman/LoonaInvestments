const { Schema, model } = require('mongoose');

const account = new Schema({
  //Step 1
  fullName: String,
  gender: Boolean,
  dob: String,
  //Step 2
  email: String,
  phoneNumber: String,
  address: String,
  //Step 3
  password: String,
  //Step 4
  ssn: String,
}, { collection: "Users" });

module.exports = model("Accounts", account);