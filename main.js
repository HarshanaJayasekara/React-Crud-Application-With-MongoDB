require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 4000

//database connection
mongoose.connect(process.env.DB_URI, { useNewParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));

app.get("/", (req, res) => {
    res.send("Diwan Sachidu");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})