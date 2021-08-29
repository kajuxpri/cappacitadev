const express = require ('express')
const app = express()
const dataBase = require ('./database/databaseMysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({ extended: true }))

app.post('/pokemons', async (req, res) => {
    const pokemon = await dataBase.salvarPokemons ({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.get('/pokemons/:id', async (req, res) => {
    res.send(await dataBase.mostrarPokemon(req.params.id))
})

app.get('/pokemons', async (req, res) => {
    res.send(await dataBase.mostrarPokemons())
})

app.put('/pokemons/:id', (req, res) => {
   const pokemon = dataBase.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
   })
   res.send(pokemon)
})

app.delete('/pokemons/:id', (req, res) => {
    res.send(dataBase.deletarPokemon(req.params.id))
})

app.post('/batalha', (req, res) => {
    res.send(dataBase.batalhaPokemon (req.body.id1, req.body.id2))
})

app.post('/pokemons/:id', (req, res) => {
    const pokemon = dataBase.curarPokemon(req.params.id)
    res.send(pokemon)
})

app.listen(3002)