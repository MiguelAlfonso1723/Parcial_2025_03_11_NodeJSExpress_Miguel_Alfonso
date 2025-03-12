import express from 'express';
import path from 'node:path';
import persons from '../resources/persons.js';

const route = express.Router();

const species = new Set();


persons.forEach(person => {
    if (person.species) { 
            species.add(person.species); 
        }
});


route.get('/', (req, res) => {

    res.render('index', {"title": "Personajes Star Wars", "persons": persons, "species":species})
})


export default route