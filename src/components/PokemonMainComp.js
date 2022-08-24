import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {nanoid} from 'nanoid'
 
import pokemonContext from '../context/pokemonContext'
 import Navbar from "./NavbarComp"
import Game from "./GameComp"
 
 
function PokemonMainComp() {

  const [pokemonArray, setPokemonArray] = useState([])

  //shuffling algo from Fisher-Yates(aka Knuth)
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  // creating a pokemon collection with 8 unique pokemons
  const loadPokemonData = async () => {

    let pokemonDataArray1 = []
    for (let i = 1; i <= 8; i++){
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      // pokemonDataArray1.push(data.data)
      pokemonDataArray1.push(
        {
          name: data.data.name,
          id:nanoid(),
          images: data.data.sprites,
          clicked: false,
          matchFound: false
        }
      )

    }
    // creating a copy of pokemonDataArray1 and combining them together
    // then scrambling the contents of the combiled array to get an
    // array of 8 pokemons repeated twice at diff.positions and settitng it to state
    const pokemonDataArray2 = pokemonDataArray1.map(el => {
      el = {
        ...el,
        id:nanoid()
      }
      return el
    })
    const completePokemonArray = pokemonDataArray1.concat(pokemonDataArray2)
    const shuffledPokemonArr = shuffle(completePokemonArray)
    setPokemonArray(shuffledPokemonArr)
  }
  
  useEffect(() => {
    loadPokemonData()
  }, [])

  const matchFound = (pokeId) => {
    console.log('finding a match');

    // check if thr current clicked pokemon has a match

    // 1. find the pokemon name that is currently clicked
    let pokemonName , bothClicked = false
    pokemonArray.forEach(el => {
      if (pokeId === el.id) {
        pokemonName = el.name
      }
    })

    // 2. find the other matching pair 
    const pairs = pokemonArray.filter(el => {
      if(el.name === pokemonName) return el
    })

    // 3. check if it is clicked
    if (pairs[0].clicked && pairs[1].clicked) bothClicked = true
    
    // 4. if both pairs are clicked, then turn "matchFound = true" for both of them
    let updatedPokemonArray
    if (bothClicked) {
      updatedPokemonArray= pokemonArray.map(el => {
        if(el.id === pairs[0].id) el.matchFound = true
        if (el.id === pairs[1].id) el.matchFound = true
        
        return el
      })
    }

    // 5. update the pokemon array to include the matching values
    if(updatedPokemonArray) setPokemonArray(updatedPokemonArray)
    

  }

  const flipBack = (currentClickedPokemon) => {
    console.log('flipping back');

    // exclude the current clicked pokemon
    const clickedResetArray = pokemonArray.map(el => {
      if (el.id === currentClickedPokemon) {       
      } else {
        el.clicked = false
      }

      return el
    })

    setPokemonArray(clickedResetArray)
  }
  
  const clicked = (id) => {

    // 1. find out which pokemon is clicked 
    const clickedPokemons = pokemonArray.map(el => {
      if (el.id === id) el.clicked = true
      return el
    })
    // update the pokemon list
    setPokemonArray(clickedPokemons)

    // 2. check if the same other pokemon is clicked (matchfound)
    matchFound(id)

    // 3. Flip all pokemon cards back to normal except the matchFound one's (if any)
    flipBack(id)
  }

// console.log(pokemonArray);


  const value = {pokemonArray,setPokemonArray,clicked}
  return (
    <>
      < Navbar />
      <pokemonContext.Provider value={value}>
        <Game />
      </pokemonContext.Provider>
    </>
    
  )
}

export default PokemonMainComp