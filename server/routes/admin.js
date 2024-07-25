const express = require('express');
const router = express.Router();
const Train = require('../mongoDB/models/train');

// Add a new train 

router.post('/addtrains', async (req, res) => {

    // res.send("Hello from admin")

  const addedNewTrain = new Train({
    trainName: req.body.trainName,
    trainNumber: req.body.trainNumber,
    arrivalTime: req.body.arrivalTime,
    departureTime: req.body.departureTime
  });
  
  try {
    const newTrainStatus = await addedNewTrain.save();
     res.status(201).json(newTrainStatus);
    } 

   catch (err) {
    res.status(400).json({ message: err.message });
  }

});

// Update

router.patch('/trains/:id', async (req, res) => {

    //res.send("Hello")
    
  try {
      
     const foundTrain = await Train.findById(req.params.id);

    if (req.body.trainName != null) {

      foundTrain.trainName = req.body.trainName;
    }

    if (req.body.trainNumber != null) {

      foundTrain.trainNumber = req.body.trainNumber;
    }

    if (req.body.arrivalTime != null) {

      foundTrain.arrivalTime = req.body.arrivalTime;
    }

    if (req.body.departureTime != null) {

      foundTrain.departureTime = req.body.departureTime;
    }

    const updatedTrainStatus = await foundTrain.save();
    res.json(updatedTrainStatus);

  } 
  catch (err) {

    res.status(400).json({ message: err.message });
  }


});



// Delete 


router.delete('/trains/:id', async (req, res) => {

   // res.send("Hello")

  try {
    const foundTrain = await Train.findById(req.params.id);
    await foundTrain.remove();
    res.json({ message: 'Deleted train status' });
  } 
  
  catch (err) {
    res.status(500).json({ message: err.message });
  }


});

module.exports = router;