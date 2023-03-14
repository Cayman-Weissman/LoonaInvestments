const express = require('express')
const app = express()

const server = require('http').createServer(app)

const mongoose = require('./data/mongo.js')()

const mongoExample = require('./data/models/example.js')

const port = '8080';

server.listen(port, function() {
  console.log(`Listening on port ${port}`)
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})


app.get('/css/main.css', (req, res) => {
    res.sendFile(__dirname + '/css/main.css');
})
app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
})
app.get('/css/util.css', (req, res) => {
    res.sendFile(__dirname + '/css/util.css');
})
app.get('/css/material-design-iconic-font.css', (req, res) => {
    res.sendFile(__dirname + '/css/material-design-iconic-font.css');
})
app.get('/css/material-design-iconic-font.min.css', (req, res) => {
    res.sendFile(__dirname + '/css/material-design-iconic-font.min.css');
})
app.get('/css/vendors/uikit.min.css', (req, res) => {
    res.sendFile(__dirname + '/css/vendors/uikit.min.css');
})


app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/js/main.js');
})
app.get('/js/config-theme.js', (req, res) => {
    res.sendFile(__dirname + '/js/config-theme.js');
})
app.get('/js/vendors/blockit.min.js', (req, res) => {
    res.sendFile(__dirname + '/js/vendors/blockit.min.js');
})
app.get('/js/vendors/uikit.min.js', (req, res) => {
    res.sendFile(__dirname + '/js/vendors/uikit.min.js');
})


app.get('/img/favicon.png', (req, res) => {
    res.sendFile(__dirname + '/img/favicon.png');
})
app.get('/img/favicon2.png', (req, res) => {
    res.sendFile(__dirname + '/img/favicon2.png');
})
app.get('/img/in-liquid-icon-1.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-icon-1.svg');
})
app.get('/img/in-liquid-icon-2.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-icon-2.svg');
})
app.get('/img/in-liquid-icon-3.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-icon-3.svg');
})
app.get('/img/in-liquid-icon-4.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-icon-4.svg');
})
app.get('/img/in-liquid-object-1.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-object-1.svg');
})
app.get('/img/in-liquid-object-2.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-object-2.svg');
})
app.get('/img/in-liquid-object-3.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-object-3.svg');
})
app.get('/img/in-liquid-slide-2.svg', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-slide-2.svg');
})
app.get('/img/in-liquid-slide-bg.png', (req, res) => {
    res.sendFile(__dirname + '/img/in-liquid-slide-bg.png');
})
app.get('/img/in-logo-1.png', (req, res) => {
    res.sendFile(__dirname + '/img/in-logo-1.png');
})


app.get('/fonts/fa-brands-400.woff2', (req, res) => {
    res.sendFile(__dirname + '/fonts/fa-brands-400.woff2');
})
app.get('/fonts/fa-solid-900.woff2', (req, res) => {
    res.sendFile(__dirname + '/fonts/fa-solid-900.woff2');
})
app.get('/fonts/inter-v2-latin-500.woff2', (req, res) => {
    res.sendFile(__dirname + '/fonts/inter-v2-latin-500.woff2');
})
app.get('/fonts/inter-v2-latin-700.woff2', (req, res) => {
    res.sendFile(__dirname + '/fonts/inter-v2-latin-700.woff2');
})
app.get('/fonts/inter-v2-latin-regular.woff2', (req, res) => {
    res.sendFile(__dirname + '/fonts/inter-v2-latin-regular.woff2');
})
app.get('/fonts/Materials-Design-Iconic-Font.eot', (req, res) => {
    res.sendFile(__dirname + '/fonts/Materials-Design-Iconic-Font.eot');
})
app.get('/fonts/Materials-Design-Iconic-Font.svg', (req, res) => {
    res.sendFile(__dirname + '/fonts/Materials-Design-Iconic-Font.svg');
})
app.get('/fonts/Materials-Design-Iconic-Font.ttf', (req, res) => {
    res.sendFile(__dirname + '/fonts/Materials-Design-Iconic-Font.ttf');
})
app.get('/fonts/Materials-Design-Iconic-Font.woff', (req, res) => {
    res.sendFile(__dirname + '/fonts/Materials-Design-Iconic-Font.woff');
})
app.get('/fonts/Materials-Design-Iconic-Font.woff2', (req, res) => {
    res.sendFile(__dirname + '/fonts/Materials-Design-Iconic-Font.woff2');
})
app.get('/fonts/font-awesome-4.7.0/css/font-awesome.min.css', (req, res) => {
    res.sendFile(__dirname + '/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
})
app.get('/fonts/iconic/css/material-design-iconic-font.min.css', (req, res) => {
    res.sendFile(__dirname + 'fonts/iconic/css/material-design-iconic-font.min.css');
})