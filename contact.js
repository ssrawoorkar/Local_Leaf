const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);

/*
This is the blue print for what a users contact information would look like. It consists of the users name, email, and 
a discription of their problem and finally we add in a date to their contact us ticket.
*/