const express = require('express');
const router = express.Router();
const Train = require('../mongoDB/models/train');

// Get all train

router.get('/trains', async (req, res) => {

   // res.send("Hellooooo")

  try {

    const allTrains = await Train.find();
    res.json(allTrains);
     
  }
   catch (err) {
    res.status(500).json({ message: err.message });
  }

});

module.exports = router;