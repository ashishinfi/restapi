'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const roiRoutes = require('./routes/roiRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', roiRoutes.routes);

app.use(bodyParser.json())
app.options("*", cors());
// app.use(express.json());

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization, x-access-token,"
  );
  next();
});

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});