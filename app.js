import express from 'express'
const app = express()
const port = 3000

import animals, { Animal, searchAnimals } from './animalDatabase.js'

app.use('/static', express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('index', { animals: animals })
})

app.get('/add-animal', (req, res) => {
    res.send('Add an animal')
})

app.get('/search', (req, res) => {
    const name = req.query.name;
    const searchResults = searchAnimals(name);
    res.json(searchResults);

})

app.post('/add-animal', (req, res) => {


    const newAnimal = new Animal(
        animals.length + 1,
        req.query.name,
        req.query.kind,
        req.query.birthDate,
        req.query.deathDate
    );
    animals.push(newAnimal);

    res.send(newAnimal)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})