const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const route = require('./routes/route');
const cors = require("cors");
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database!');
}).catch(() => {
    console.log('Connection failed!');
});
app.use("/social/api/v1", route);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

