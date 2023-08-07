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
  clientName: { type: String },
  clientAddress: { type: String },
});

const invoiceSchema = new Schema({
  date: { type: Date },
  hours: { type: String },
  amount: { type: String },
  total: { type: String },
});

const Tutors = mongoose.model("Tutors", tutorSchema, "tutors");
const Clients = mongoose.model("Clients", clientSchema, "clients");
const Invoices = mongoose.model("Invoices", invoiceSchema, "invoices");
const mySchemas = { Tutors: Tutors, Clients: Clients, Invoices: Invoices };

module.exports = mySchemas;
