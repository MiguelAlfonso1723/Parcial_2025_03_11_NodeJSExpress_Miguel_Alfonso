import express from 'express';
import path from 'node:path';
import persons from '../resources/persons.js';



const route = express.Router();

route.get('/', (req, res) => {

    res.render('index', {"title": "Personajes Star Wars", "persons": persons})
})

console.log(typeof persons)

export default route