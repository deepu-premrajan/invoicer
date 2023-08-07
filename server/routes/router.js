const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/tutor", async (req, res) => {
  const { name, address, email, phone, bankName, bankAccount } = req.body;
  const tutorData = {
    name: name,
    address: address,
    email: email,
    phone: phone,
    bankName: bankName,
    bankAccount: bankAccount,
  };
  const newTutor = new schemas.Tutors(tutorData);
  const saveTutor = await newTutor.save();

  if (saveTutor) {
    res.send("Tutor information sent");
  } else {
    res.send("Failed to send tutor information");
  }

  res.end();
});

router.post("/client", async (req, res) => {
  const { clientName, clientAddress } = req.body;
  const clientData = {
    clientName: clientName,
    clientAddress: clientAddress,
  };
  const newClient = new schemas.Clients(clientData);
  const saveClient = await newClient.save();

  if (saveClient) {
    res.send("Client information sent");
  } else {
    res.send("Failed to send client information");
  }

  res.end();
});

router.post("/invoice", async (req, res) => {
  const { date, hours, amount, total } = req.body;
  const invoiceData = {
    date: date,
    hours: hours,
    amount: amount,
    total: total,
  };

  console.log(date + " | " + hours + " | " + amount + " | " + total);

  const newInvoice = new schemas.Invoices(invoiceData);
  const saveInvoice = await newInvoice.save();

  if (saveInvoice) {
    res.send("Invoice information sent");
  } else {
    res.send("Failed to send invoice information");
  }

  res.end();
});

router.get("/clients", (req, res) => {
  const clientData = [
    {
      id: 1,
      name: "Jonah Rueter",
      address: "9583 Westwinds Lane Irvine, CA 92612",
    },
    {
      id: 2,
      name: "Ayden Patel",
      address: "1000 Elements Way Irvine, CA 92612",
    },
    {
      id: 3,
      name: "Nyle Patel",
      address: "32489 Marshall Drive Culver City, CA 90230",
    },
  ];

  res.send(clientData);
});

module.exports = router;
