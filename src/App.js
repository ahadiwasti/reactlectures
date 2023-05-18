import './App.css';
import PropTypes from 'prop-types'
import pokemons from './pokemon.json'

const PokemonRow = ({pokemon})=>(
  <tr>
  <td>{pokemon.name.english}</td>
  <td>{pokemon.type.join(', ')}</td>
  </tr>
  );
PokemonRow.propTypes={
  pokemon : PropTypes.shape({
    name : PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string)
  })
}

function App() {
  return (
    <>
    <div style={{
      marginTop: '1rem',
      padding:10
      
    }}>
     <div className='title'>Pokemon Search</div>
     <table width="100%">
      <thead>
        <tr>
        <th>Name</th>
        <th>Type</th>
        </tr>
        
      </thead>
      <tbody>
        {pokemons.slice(0,20).map(pokemon=>(
           <PokemonRow pokemon={pokemon} key={pokemon.id}/>
        ))}
       
      
      </tbody>
     </table>
     </div>
    </>
  );
}

export default App;
