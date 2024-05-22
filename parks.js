const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  Events: { type: String, required: true, default: 'None' },
  ParkName: { type: String, required: true, unique: true },
  City: { type: String, required: true, default: 'None' },
});

module.exports = mongoose.model('Park', parkSchema, 'parks');
/*
This is basically the blue print for what all park events. A park event has 3 attributes, the event name itself, 
the name of the park, and lastly which city the park is located in. 
*/