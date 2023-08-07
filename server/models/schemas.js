const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  name: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: String },
  bankName: { type: String },
  bankAccount: { type: String },
});

const clientSchema = new Schema({
  name: { type: String },
  address: { type: String },
});

const Tutors = mongoose.model("Tutors", tutorSchema, "tutors");
const Clients = mongoose.model("Clients", clientSchema, "clients");
const mySchemas = { Tutors: Tutors, Clients: Clients };

module.exports = mySchemas;
