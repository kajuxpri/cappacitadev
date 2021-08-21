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

app.put('/pokemons/:id', (req, res) => {
   const pokemon = dataBase.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        id: parseInt(req.params.id)
   })
   res.send(pokemon)
})

app.delete('/pokemons/:id', (req, res) => {
    res.send(dataBase.deletarPokemon(req.params.id))
})

app.listen(3003)