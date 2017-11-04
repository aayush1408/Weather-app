const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./keys.js');
const key = keys.weather.key;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('city');
});

app.post('/weather/details',(req,res)=>{
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`; 
});
app.listen('3000');
