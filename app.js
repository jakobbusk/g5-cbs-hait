import express from 'express'
const app = express()
const port = 3000
import bodyParser from 'body-parser'

import animals, { Animal, searchAnimals } from './animalDatabase.js'

app.use('/static', express.static('public'))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.render('index', { animals: animals })
})


app.get('/search', (req, res) => {
    const name = req.query.name;
    const searchResults = searchAnimals(name);
    res.json(searchResults);

})

app.post('/add-animal', (req, res) => {
    console.log(req.body);


    const newAnimal = new Animal(
        req.body.name,
        req.body.kind,
        req.body.birthDate,
        req.body.deathDate
    );

    animals.push(newAnimal);

    // res.json({ body: req.body, newAnimal });
    res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})