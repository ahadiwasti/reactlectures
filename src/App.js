import './App.css';
import pokemons from './pokemon.json'

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
           <tr key={pokemon.id}>
           <td>{pokemon.name.english}</td>
           <td>{pokemon.type.join(', ')}</td>
           </tr>
        ))}
       
      
      </tbody>
     </table>
     </div>
    </>
  );
}

export default App;
