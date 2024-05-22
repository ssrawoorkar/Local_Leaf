// Imports everything we need
const express = require('express');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
const connectDB = require('./modules/db.js');
const path = require('path');
const routes = require('./routes/routes');  

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

connectDB(true);  
app.use(express.static(path.join(__dirname, 'public')));


routes(app);  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
