const { databaseConnection } = require('./connection')

async function salvarPokemons(pokemon) {
   /*
   pokemon == {
       nome: 'Pikachu',
       tipo: 'Elétrico',
       origem: 'Kanto'
   }
   */
  const insertPokemon = {
      nome_pokemon: pokemon.nome,
      tipo: pokemon.tipo,
      local_origem: pokemon.origem
  }

  const result = await databaseConnection('pokemons').insert(insertPokemon)

  console.log(result)

  if(result) {
      return {
        ...pokemon,
        id: result[0]
      }
  }else{
      console.error("Deu erro!")
      return{
          error: "Deu erro na inserção"
      }
  }
}

async function mostrarPokemon(id) {
    const result = await databaseConnection('pokemons').where({id})

      return result

}

async function mostrarPokemons() {
    const result = await databaseConnection('pokemons')

    return result
}

async function alterarPokemon(id, pokemon) {
    const updatePokemon = {
        nome_pokemon: pokemon.nome,
        tipo: pokemon.tipo,
        local_origem: pokemon.origem 
    }

    const result = await databaseConnection('pokemons').where({ id }).update(updatePokemon)

    console.log(result)

    if(result) {
        return {
            ...pokemon,
            id
        }
    }else{
        console.error("Deu erro!")
        return{
            error: "Deu erro na inserção"
        }
    }
}

async function deletarPokemon(id) {
    const result = await databaseConnection('pokemons').where({id}).del()
    
    console.log(result)

    if(result) {
        return {
            id: "Campo deletado com sucesso!"
        }
    }else{
        console.error("Erro!")
        return{
            error: "Campo Inexistente ou já deletado."
        }
    }
}

function batalhaPokemon (id1, id2) {
    
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp = pokemon2.hp - superEfetivo
        }else if(pokemon1.tipo == pokemon2.resistencia) {
            pokemon2.hp = pokemon2.hp - naoEfetivo
        }else{
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp = pokemon1.hp - superEfetivo
        }else if(pokemon2.tipo == pokemon1.resistencia) {
            pokemon1.hp = pokemon1.hp - naoEfetivo
        }else{
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    if(pokemon1.hp < 0) pokemon.hp = 0
    if(pokemon2.hp < 0) pokemon.hp = 0

    return `${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}`
 
}

function curarPokemon(id) {
    const pokemon = pokemons[id]

    if(pokemon.hp <= 100) {
        pokemon.hp = pokemon.hp + 20
    }

    if(pokemon.hp >= 100) {
        pokemon.hp = 100
    } 


    return `${pokemon.nome}: ${pokemon.hp}` 
}

module.exports = {
    salvarPokemons, 
    mostrarPokemon, 
    mostrarPokemons, 
    alterarPokemon, 
    deletarPokemon, 
    batalhaPokemon, 
    curarPokemon
}