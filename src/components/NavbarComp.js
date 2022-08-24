import React, { useContext } from 'react'
import pokemonContext from '../context/pokemonContext'

function NavbarComp() {

  const { gameReset } = useContext(pokemonContext)

  return (
        <>
          <div className="navbar-container">
              <h1>Pokemon</h1>
              <p onClick={() => gameReset()} className='game-bttn'>Reset Game</p>
            </div>
        </>
    )
}

export default NavbarComp