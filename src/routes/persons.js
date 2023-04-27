const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

// se define una nueva ruta, donde se verán reflejados los datos de la BD
router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    res.render('index.ejs', {Persons});
});

module.exports = router;