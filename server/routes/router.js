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
