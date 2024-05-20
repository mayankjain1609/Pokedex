import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { api } from '~/trpc/react';
import PokemonCard from './PokemonCard';

export default function Tags() {

  const [names , setNames] = React.useState([""]);

  const {data , isLoading , isError} = api.pokemon.getMultiplePokemons.useQuery({names});
  
  return (
    <>
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={pokemonNames}
        onChange={(e , newValue) => setNames(newValue)}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      
    </Stack>
    <div className="m-4 p-10">
      {data?.[0]?.id && data.map(card => {
        return <PokemonCard key={card.id} data={card} />
      })}
      {isLoading && <h1>Loading ....</h1>}
      {isError && <h1>Error Phew ....</h1>}
    </div>
    </>
  );
}

// const pokemons = [
//   'Farfetch’d' , 
//   'Bulbasaur' , 
//   'Abra' , 
//   'Alakazam' , 
//   'Arbok' ,
//   'Arcanine' , 
//   'Beedrill' , 
//   'Bellsprout' , 
//   'Blastoise' , 
//   'Bulbasaur' , 
//   'Butterfree' , 
//   'Caterpie' ,
//   'Charizard' ,
//   'Charmander' , 
//   'Charmeleon' , 
//   'Clefable' , 
//   'Clefairy' , 
//   'Dewgong' , 
//   'Diglett' ,
//   'Dodrio' , 
//   'Doduo' ,
//   'Dugtrio' , 
//   'Ekans' , 
//   'Farfetch’d' , 

// ]


const pokemonNames = [
  'Abra' ,

'Alakazam' ,

'Arbok' ,

'Arcanine' ,

'Beedrill' ,

'Bellsprout' ,

'Blastoise' ,

'Bulbasaur' ,

'Butterfree' ,

'Caterpie' ,

'Charizard' ,

'Charmander' ,

'Charmeleon' ,

'Clefable' ,

'Clefairy' ,

'Dewgong' ,

'Diglett' ,

'Dodrio' ,

'Doduo' ,

'Dugtrio' ,

'Ekans' ,

'Farfetch’d' ,

'Fearow' ,

'Geodude' ,

'Gloom' ,

'Golbat' ,

'Golduck' ,

'Golem' ,

'Graveler' ,

'Growlithe' ,

'Ivysaur' ,

'Jigglypuff' ,

'Kadabra' ,

'Kakuna' ,

'Machamp' ,

'Machoke' ,

'Machop' ,

'Magnemite' ,

'Magneton' ,

'Mankey' ,

'Meowth' ,

'Metapod' ,

'Nidoking' ,

'Nidoqueen' ,

'Nidoran♀' ,

'Nidoran♂' ,

'Nidorina' ,

'Nidorino' ,

'Ninetales' ,

'Oddish' ,

'Paras' ,

'Parasect' ,

'Persian' ,

'Pidgeot' ,

'Pidgeotto' ,

'Pidgey' ,

'Pikachu' ,

'Poliwag' ,

'Poliwhirl' ,

'Poliwrath' ,

'Ponyta' ,

'Primeape' ,

'Psyduck' ,

'Raichu' ,

'Rapidash' ,

'Raticate' ,

'Rattata' ,

'Sandshrew' ,

'Sandslash' ,

'Seel' ,

'Slowbro' ,

'Slowpoke' ,

'Spearow' ,

'Squirtle' ,

'Tentacool' ,

'Tentacruel' ,

'Venomoth' ,

'Venonat' ,

'Venusaur' ,

'Victreebel' ,

'Vileplume' ,

'Vulpix' ,

'Wartortle' ,

'Weedle' ,

'Weepinbell' ,

'Wigglytuff' ,

'Zubat' ,
]








