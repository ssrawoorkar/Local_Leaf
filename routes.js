const express = require('express');
const Park = require('../public/scripts/parks'); // Ensure this path is correct
const axios = require('axios');
const Contact = require('../public/scripts/contact'); // Ensure this path is correct

module.exports = function(app) {
  app.use(express.json()); // Ensure req.body is parsed
  app.use((req, res, next) => {
    res.locals.appName = 'Local Leaf';
    next();
  });

  //GET
  //route to home page
  app.get('/', (req, res) => {
    res.render('home', { title: 'Local Leaf' });
  });
  //rount to about page
  app.get('/about', (req, res) => {
    res.render('about', { title: 'Welcome to Local Leaf' });
  });
  // route to contact page
  app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Local Leaf - Contact Us' });
  });
  //route to createEvent page
  app.get('/createEvent', (req, res) => {
    res.render('createEvent', { title: 'Create Event' });
  });
  // route to parkList page
  app.get('/parkList', async (req, res) => {
    const city = req.query.city;
    try {
      const parks = await Park.find({ City: city }).lean(); // Used lean() for better performance and plain JS objects
      res.render('parkList', { title: `List of Parks in ${city}`, parks: parks, city: city });
    } catch (err) {
      console.error('Error in /parkList:', err);
      res.status(500).send("Failed to get parks.");
    }
  });
  
  //POST
  app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });

    newContact.save()//creates a new contact in the data base
      .then(() => {
        res.status(200).json({ message: 'We have received your request. We will reach back out shortly.' });
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong... Try reloading the page.' });
      });
  });

  app.post('/createEvent', async (req, res) => {
    const { eventName, parkName, city } = req.body;
    try { // we check to see if the park exists in the data base
      let park = await Park.findOne({ ParkName: parkName, City: city }); // I used await to wait for the database query to finish
      if (park) { // if the park exists then update the event with the new event given by the user
        park.Events = eventName;
        await park.save();
      } else { // if there was no park found in that city, then create a new park with the given event data in our database
        park = new Park({ ParkName: parkName, City: city, Events: eventName });
        await park.save(); // we save the park data here
      }
      res.status(200).json({ message: 'Sucess!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed :(' });
    }
  });
};
