
const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({

  trainName: {
    type: String,
    required: true
  },

  trainNumber: {
    type: Number,
    required: true,
    unique: true
  },

  arrivalTime: {
    type: Date,
    required: true
  },

  departureTime: {
    type: Date,
    required: true
  }
  
});

const Train= mongoose.model('Train', trainSchema);

module.exports=Train;
