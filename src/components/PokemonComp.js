import React,{useContext} from 'react'
import pokeball from '../resourses/images/pb.png'
import pokemonContext from '../context/pokemonContext'


function PokemonComp(props) {

  const { pokemonArray, clicked } = useContext(pokemonContext)

  return (
      <>
        <div onClick={() => clicked(props.data.id)} className="pokemon">
        {/* <img src={props.data.clicked ? props.data.images.front_default : pokeball} alt="" /> */}
        <img src={
          props.data.matchFound ? props.data.images.front_default :
            props.data.clicked ? props.data.images.front_default : pokeball
            
        } alt="" />        
        </div>
      </>
    )
}

export default PokemonComp