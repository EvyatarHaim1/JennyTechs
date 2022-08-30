const express = require('express');
const app = express();
const Product = require('./model/schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    let documents = await Product.find({})
    res.send(documents)
})

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, dbName: "JennyTechs", useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB")

    app.listen(process.env.PORT, function () {
        console.log(`express server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log(err);
})
// require route
