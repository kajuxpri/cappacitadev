const express = require ('express')
const app = express()
const dataBase = require ('./dataBase')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({ extended: true }))


app.get('/pokemons/:id', (req, res) => {
    res.send(dataBase.mostrarPokemon(req.params.id))
})

app.get('/pokemons', (req, res) => {
    res.send(dataBase.mostrarPokemons())
})

app.post('/pokemons', (req, res) => {
    const pokemon = dataBase.salvarPokemons ({
        nome: req.body.nome,
        tipo: req.body.tipo
    })
    res.send(pokemon)
   
})

app.listen(3003)