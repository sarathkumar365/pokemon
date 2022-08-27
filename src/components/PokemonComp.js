import React,{useContext} from 'react'
import pokeball from '../resourses/images/pokeball.png'
import pokemonContext from '../context/pokemonContext'


function PokemonComp(props) {

  const { clicked } = useContext(pokemonContext)

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };

  const frontStyle = {
    backgroundImage: `url(${pokeball})`,
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  }

  //get corresponding background color for each pokemon
  const type = props.data.types[0]?.type?.name;
  const color = colors[type] ||'#F5F5F5';

  const backtStyle = {
    backgroundImage: `url(${
      props.data.matchFound ? props.data.images.front_default :
            props.data.clicked ? props.data.images.front_default : pokeball
      })` ,
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: `${color}`,
    
  }   

  return (
    <>
      <div onClick={() => {
         clicked(props.data.id)
      }
      }        
        className={props.data.matchFound ? 'card flipped' : props.data.clicked ? 'card flipped' : 'card' }>
        <div style={frontStyle} className="card-front"></div>
        <div style={backtStyle} className="card-back">{ props.data.name}</div>
      </div>
    </>
  )



}

export default PokemonComp