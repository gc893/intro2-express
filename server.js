// Require Modules

const express = require('express');
const path = require('path');
const skillsDb = require('./data/skills')


// Create app

const app = express();

// Configure app (app.set)



// Mount middleware (app.use)

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

// Mount routes

app.get('/', (req, res) => {
    res.redirect('/skills');
})

app.get('/skills', (req, res) => {
    res.render('index', {
        skills: skillsDb.getAll(),
        title: 'Skills'
    })
})

app.get('/skills/:id', (req, res) => {
    res.render('skill', {
        skills: skillsDb.findSkill(req.params.id),
        title: 'Details'
    })
})

// Start server on port 3000

app.listen(3000, function () {
    console.log(`Listening on port 3000`);
})