import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { api } from '~/trpc/react';
import PokemonCard from './PokemonCard';

export default function Tags() {

  const [names , setNames] = React.useState<string[]>([]);

  const {data , isLoading , isError} = api.pokemon.getMultiplePokemons.useQuery({names});

  let pokemonNames  = [""];

  const resNames = api.pokemon.getAllPokemonNames.useQuery();
  pokemonNames = (resNames?.data ?? []);
  const { isLoading: isLoadingAll, isError: isErrorAll } = resNames

  
  return (
    <div className='flex flex-col'>
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={pokemonNames}
        value={names}
        onChange={(e , newValue) => setNames(newValue)}
        filterSelectedOptions
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          )
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip {...getTagProps({ index })} key={option} label={option} />
          ))
        }}
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
        const {id , ...otherProps} = card;
        return <PokemonCard key={id} data={card} {...otherProps} />
      })}
      {isLoading && <h1>Loading ....</h1>}
      {isError && <h1>Error Phew ....</h1>}
      {isLoadingAll && <h1>....Loading Pokemon Name ...</h1>}
      {isErrorAll && <h1>Something went wrong with fetching pokemons ....</h1>}
    </div>
    </div>
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


// const pokemonNames = [
//   'Abra' ,

// 'Alakazam' ,

// 'Arbok' ,

// 'Arcanine' ,

// 'Beedrill' ,

// 'Bellsprout' ,

// 'Blastoise' ,

// 'Bulbasaur' ,

// 'Butterfree' ,

// 'Caterpie' ,

// 'Charizard' ,

// 'Charmander' ,

// 'Charmeleon' ,

// 'Clefable' ,

// 'Clefairy' ,

// 'Dewgong' ,

// 'Diglett' ,

// 'Dodrio' ,

// 'Doduo' ,

// 'Dugtrio' ,

// 'Ekans' ,

// 'Farfetch’d' ,

// 'Fearow' ,

// 'Geodude' ,

// 'Gloom' ,

// 'Golbat' ,

// 'Golduck' ,

// 'Golem' ,

// 'Graveler' ,

// 'Growlithe' ,

// 'Ivysaur' ,

// 'Jigglypuff' ,

// 'Kadabra' ,

// 'Kakuna' ,

// 'Machamp' ,

// 'Machoke' ,

// 'Machop' ,

// 'Magnemite' ,

// 'Magneton' ,

// 'Mankey' ,

// 'Meowth' ,

// 'Metapod' ,

// 'Nidoking' ,

// 'Nidoqueen' ,

// 'Nidoran♀' ,

// 'Nidoran♂' ,

// 'Nidorina' ,

// 'Nidorino' ,

// 'Ninetales' ,

// 'Oddish' ,

// 'Paras' ,

// 'Parasect' ,

// 'Persian' ,

// 'Pidgeot' ,

// 'Pidgeotto' ,

// 'Pidgey' ,

// 'Pikachu' ,

// 'Poliwag' ,

// 'Poliwhirl' ,

// 'Poliwrath' ,

// 'Ponyta' ,

// 'Primeape' ,

// 'Psyduck' ,

// 'Raichu' ,

// 'Rapidash' ,

// 'Raticate' ,

// 'Rattata' ,

// 'Sandshrew' ,

// 'Sandslash' ,

// 'Seel' ,

// 'Slowbro' ,

// 'Slowpoke' ,

// 'Spearow' ,

// 'Squirtle' ,

// 'Tentacool' ,

// 'Tentacruel' ,

// 'Venomoth' ,

// 'Venonat' ,

// 'Venusaur' ,

// 'Victreebel' ,

// 'Vileplume' ,

// 'Vulpix' ,

// 'Wartortle' ,

// 'Weedle' ,

// 'Weepinbell' ,

// 'Wigglytuff' ,

// 'Zubat' ,
// ]








