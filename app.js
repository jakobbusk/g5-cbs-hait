import express from 'express'
const app = express()
const port = 3000
import animals, { Animal } from './animalDatabase.js'

app.get('/', (req, res) => {
  res.json(animals)
})

app.get('/add-animal', (req, res) => {
    res.send('Add an animal')
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