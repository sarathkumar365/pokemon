import React, { useContext } from 'react'
import pokemonContext from '../context/pokemonContext'

import PokemonComp from './PokemonComp'

function GameComp() {

  const pokemonDatas = useContext(pokemonContext)
  const pokemonArrays = pokemonDatas.pokemonArray.map((el, i) => {
    return <PokemonComp key={i} data={el} />
  })


  return (
    <div className="game-container">
      <div className="pokemon-container">
        {/* < PokemonComp  />         */}
        {pokemonArrays}
      </div>
    </div>
    )
}

export default GameComp