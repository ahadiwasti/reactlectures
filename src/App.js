import './App.css';
import PropTypes, { object } from 'prop-types'
import React from 'react';

const PokemonRow = ({pokemon, onSelect})=>(
  <tr>
  <td>{pokemon.name.english}</td>
  <td>{pokemon.type.join(', ')}</td>
  <td>
    <button onClick={()=>onSelect(pokemon)}>Select</button>
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
  const [filterValue, filterSet] = React.useState("")
  const [pokemons, setPokemons] = React.useState([])
  const [selectedItem, setItem] = React.useState("")

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
     <div className='title'>Pokemon Search</div>
     
     <div style={{
      display:"grid",
      gridTemplateColumns: '70% 30%',
      gridColumnsGap: "1rem"
     }}>
      <div>
      <input value={filterValue} 
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
        {pokemons.slice(0,20).filter((pokemon)=> pokemon.name.english.toLowerCase().includes(filterValue.toLowerCase())).map(pokemon=>(
           <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon)=> setItem(pokemon)}/>
        ))}
      </tbody>
     </table>
      </div>
     
     </div>
          <div>
          {selectedItem && (
            <div>
              <h1>{selectedItem.name.english}</h1>
            </div>
          )}
          </div>
          <div>
            {selectedItem && 
              <PokemonDetails {...selectedItem} ></PokemonDetails>
            }
            
          </div>
     </div>
    </>  
  );
}

export default App;
