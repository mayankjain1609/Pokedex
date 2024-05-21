import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { api } from '~/trpc/react';
import PokemonCard from './PokemonCard';

export default function ComboBox() {
  const [currType, setCurrType] = React.useState("");

  const { data, isLoading, isError } = api.pokemon.getByType.useQuery({ type: currType }, { enabled: !!currType });
  // console.log(data);

  return (
    <div>

      <div className='flex flex-col'>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          // value={!!currType}
          onChange={(e, newValue) => newValue && setCurrType(newValue)}
          options={pokemonTypes}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Pokemon' />}
        />
        <div>

          {isLoading && <h1>Loading ....</h1>}
          {isError && <h1>Error Phew ....</h1>}
        </div>
      </div>
      <div className='flex'>
        {data?.[0]?.id && data.map(dt => {
          return <PokemonCard key={dt.id} data={dt} />
        })}
      </div>
    </div>
  );
}

const pokemonTypes = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water'
]