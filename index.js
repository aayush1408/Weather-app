const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./keys.js');
const key = keys.weather.key;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
