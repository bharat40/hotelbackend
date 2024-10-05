const express = require('express');
const app = express();
require('dotenv').config();
const personRoutes = require('./routes/personRoutes.js');
const menuRoutes = require("./routes/menuRoutes.js");
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const db = require('./db.js')

// middleware functions
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next(); // move on to the next phase
}

app.use(logRequest);

app.get('/', (req, res) => {
    res.send("Welcome to hotel")
})

app.use(cors());
app.use(bodyParser.json()); // req.body
app.use(logRequest);
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)




app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});