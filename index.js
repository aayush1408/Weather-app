const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./keys.js');
const key = keys.weather.key;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('city', { weather: null, error: null });
});

app.post('/weather/details', (req, res) => {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
    request(url, (error, response, body) => {
        if (error) {
            res.render('city', { weather: null, error: 'Try again' })
        } else {
            let weather = JSON.parse(body);
            if (weather.main == undefined) {
                res.render('city', { weather: null, error: 'Try again' });
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('city', { weather: weatherText, error: null });
            }
        }
    });


});
var port = process.env.PORT || 3000
app.listen(port);
