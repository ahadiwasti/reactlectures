import './App.css';
import PropTypes from 'prop-types'
import pokemons from './pokemon.json'
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
    name : PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect: PropTypes.func
}

function App() {
  const [filterValue, filterSet] = React.useState("")
  const [selectedItem, setItem] = React.useState("")

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
           <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon)=> setItem(pokemon.name.english)}/>
        ))}
      </tbody>
     </table>
      </div>
     
     </div>
          <div>
          {selectedItem && (
            <div>
              <h1>{selectedItem}</h1>
            </div>
          )}
          </div>
     </div>
    </>  
  );
}

export default App;
