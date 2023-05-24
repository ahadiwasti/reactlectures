import './App.css';
import PropTypes from 'prop-types'
import React from 'react';

const PokemonRow = ({pokemon, onSelect})=>(
  <tr>
  <td>{pokemon.name.english}</td>
  <td>{pokemon.type.join(', ')}</td>
  <td>
    <button className='bg-green-400 p-5 rounded-md' onClick={()=>onSelect(pokemon)}>Select</button>
  </td>
  </tr>
  );
PokemonRow.propTypes={
  pokemon : PropTypes.shape({

    name : PropTypes.shape({
      english:PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect: PropTypes.func
}


const PokemonDetails = ({name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <tbody>
      {Object.keys(base).map((key)=>(
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
      </tbody>
      
    </table>
  </div>
)

function App() {
  const [filterValue, filterSet] = React.useState('')
  const [pokemons, setPokemons] = React.useState([])
  const [selectedItem, setItem] = React.useState(null)

  React.useEffect(() => {
    fetch("http://localhost:3000/reactlectures/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemons(data));
  }, []);

  
  

  
  return (
    <>
    <div style={{
      marginTop: '1rem',
      padding:10
      
    }}>
     <div className='text-3xl font-bold underline'>Pokemon Search</div>
     
     <div className="grid grid-cols-2 gap-4">
      <div>
      <input className='bg-green-100 w-[100%] h-20 p-3 rounded-md' value={filterValue} 
     onChange={(evt)=>filterSet(evt.target.value)}
     />
       <table width="100%">
      <thead>
        <tr>
        <th>Name</th>
        <th>Type</th>
        </tr>
        
      </thead>
      <tbody>
        {pokemons.slice(0,10).filter((pokemon)=> pokemon.name.english.toLowerCase().includes(filterValue.toLowerCase())).map(pokemon=>(
           <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon)=> setItem(pokemon)}/>
        ))}
      </tbody>
     </table>
      </div>
     
          <div>
            {selectedItem && 
              <PokemonDetails {...selectedItem} ></PokemonDetails>
            }
            
          </div>
     </div>
        
     </div>
    </>  
  );
}

export default App;
