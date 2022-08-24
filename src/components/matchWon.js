import React, { useContext } from 'react'
import pokemonContext from '../context/pokemonContext'


function matchWon() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const { gameReset } = useContext(pokemonContext)

  return (
      <>
          <div onClick={() => gameReset()}  className="matchwon-container">
              <h1>Hooreyy!! You WON</h1>
              <p className='play-again'>Play Again</p>
          </div>
      </>
  )
}

export default matchWon