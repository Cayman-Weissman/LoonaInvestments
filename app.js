const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var session = require('cookie-session')
var path = require('path');
require('dotenv').config();

app.use(bodyparser.json())
app.use(bodyparser.raw())
app.use(bodyparser.text())
app.use(bodyparser.urlencoded())

app.use(session({
    secret: 'loonasecret',
    resave: false,
    saveUninitialized: true
  }))

const server = require('http').createServer(app)

const ejs = require("ejs")

app.set('view engine', 'ejs')
app.set('views', __dirname + "/src/views");

app.use(express.static(path.join(__dirname, '/src/public')));

app.get('/', (req, res) => {
    const isLoggedIn = (req.session.account);
    res.render('home', { isLoggedIn: isLoggedIn });
})

app.get('/dashboard', (req, res, next) => {
    if (req.session.account) next()
    else res.redirect('/login')
}, 
(req, res) => res.render('dashboard', { account: req.session.account }))
  app.get('/signup', (req, res) => res.render('signup', {
  usedemail: false 
}))

app.get('/login', (req, res) => {
    const isLoggedIn = (req.session.account);
    res.render('login', { wrongemail: false, wrongpass: false, isLoggedIn: isLoggedIn })
})
app.get('/logout', (req, res) => {
    // const logout = (req.session.user = null);
    const logout = res.clearCookie('express:sess');
    res.render('logout', { logout : logout});
  })

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/careers', (req, res) => {
    res.render('careers');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})
app.get('/roadmap', (req, res) => {
    res.render('roadmap');
})
app.get('/help-center', (req, res) => {
    res.render('help-center');
})
app.get('/legal-docs', (req, res) => {
    res.render('legal-docs');
})
app.get('/top-clients', (req, res) => {
    res.render('top-clients');
})
app.get('/updates', (req, res) => {
    res.render('updates');
})

const error = {
  notfound: {
    "get": function() {
      app.get('*', (req, res) => {
        res.render('404')
      })
    }
  }
}

error.notfound.get()

const mongoose = require('./data/mongo.js')()
const bcrypt = require('bcryptjs')

const api = express.Router() // api!

const mongoAccount = require('./data/models/accounts.js')

async function findAccount(email) {
    return await mongoAccount.findOne({ email })
  }
  
  async function encrypt(password) {
    return await bcrypt.hash(password, 10);  
  }
  
  api.post('/login', async (req, res) => {
    const account = await findAccount(req.body.email)

  if (!account) {
    // Oops, no user!
    return res.render('login', { wrongemail: true, wrongpass: false })
  }

    if (!(await bcrypt.compare(req.body.password, account.password))) {
      return res.render('login', { wrongemail: false, wrongpass: true })
    }

    req.session.account = account

    console.log('')
    console.log('NEW LOGIN:')
    // console.log('Name: ' + account.firstName + ' ' + account.lastName)
    console.log('Email: ' + account.email)
    console.log('')

    return res.redirect("../dashboard")
  })
  
  api.post('/signup', async (req, res) => {
    const account = await findAccount(req.body.email)
    
    if (account) {
      return res.render('signup', { usedemail: true })
    }
  
    let pass = await bcrypt.hash(req.body.password, 10)
  
    const accountCreated = new mongoAccount({
    // gender, dob, email, phoneNumber, address, ssn
      fullName: req.body.fullName,
      email: req.body.email,
      password: pass,
    })
  
    accountCreated.save()
  
    req.session.account = accountCreated
  
    res.redirect('../dashboard')
  
    console.log('')
    console.log('NEW ACCOUNT:')
    console.log('Name: ' + accountCreated.fullName)
    console.log('Email: ' + accountCreated.email)
    console.log('')
  })
  
app.use('/api/', api)

const PORT = process.env.PORT;

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})