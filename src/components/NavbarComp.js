import React, { useContext } from 'react'
import pokemonContext from '../context/pokemonContext'

function NavbarComp() {

  const { gameReset, moves } = useContext(pokemonContext)

  return (
        <>
          <div className="navbar-container">
            <h1>Pokemon</h1>
              <div className="nav-right">
              <p>{ moves} {moves ? <span>moves</span> : ''} </p>
              <p onClick={() => gameReset()} className='game-bttn'>Reset Game</p>
            </div>
            </div>
        </>
    )
}

export default NavbarComp