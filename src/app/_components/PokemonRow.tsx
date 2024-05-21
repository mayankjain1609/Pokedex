"use client";
import React, {
    useState
} from 'react'
import TextField from '@mui/material/TextField';

import { api } from '~/trpc/react';
import PokemonCard from './PokemonCard';
import Autocomplete from '@mui/material/Autocomplete';





const PokemonRow = () => {

    // const [name, setName] = useState("");
    const [search, setSearch] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearch(name);
    // }

    const { data, isError, isLoading } = api.pokemon.getPokemon.useQuery({ name: search }, { enabled: !!search });


    let pokemonNames = [""];


    const resNames = api.pokemon.getAllPokemonNames.useQuery();
    pokemonNames = resNames?.data ?? [];
    const { isLoading: isLoadingAll, isError: isErrorAll } = resNames



    return (
        <div className="flex flex-col">
            {/* <form onSubmit={handleSubmit}>
            <div>
                <TextField id="outlined-basic" label="Enter Pokemon" value={name} variant="outlined" onChange={e => setName(e.target.value)} />
            </div>
                <Button variant="outlined" type='submit'>Submit</Button>
        </form> */}

            <Autocomplete
                disablePortal
                id='combo-box-demo'
                // value={!!currType}
                onChange={(e, newValue) => newValue && setSearch(newValue)}
                options={pokemonNames}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label='Pokemon' />}
            />

            <div className=''>
                {data?.id && <PokemonCard data={data} />}
                {isLoading && <h1>....Loading ...</h1>}
                {isError && <h1>Something went wrong ....</h1>}
                {isLoadingAll && <h1>....Loading Pokemon Name ...</h1>}
                {isErrorAll && <h1>Something went wrong with fetching pokemons ....</h1>}
            </div>
        </div>

    )
}

export default PokemonRow

// const pokemonNames = [
//     'Abra',

//     'Alakazam',

//     'Arbok',

//     'Arcanine',

//     'Beedrill',

//     'Bellsprout',

//     'Blastoise',

//     'Bulbasaur',

//     'Butterfree',

//     'Caterpie',

//     'Charizard',

//     'Charmander',

//     'Charmeleon',

//     'Clefable',

//     'Clefairy',

//     'Dewgong',

//     'Diglett',

//     'Dodrio',

//     'Doduo',

//     'Dugtrio',

//     'Ekans',

//     'Farfetch’d',

//     'Fearow',

//     'Geodude',

//     'Gloom',

//     'Golbat',

//     'Golduck',

//     'Golem',

//     'Graveler',

//     'Growlithe',

//     'Ivysaur',

//     'Jigglypuff',

//     'Kadabra',

//     'Kakuna',

//     'Machamp',

//     'Machoke',

//     'Machop',

//     'Magnemite',

//     'Magneton',

//     'Mankey',

//     'Meowth',

//     'Metapod',

//     'Nidoking',

//     'Nidoqueen',

//     'Nidoran♀',

//     'Nidoran♂',

//     'Nidorina',

//     'Nidorino',

//     'Ninetales',

//     'Oddish',

//     'Paras',

//     'Parasect',

//     'Persian',

//     'Pidgeot',

//     'Pidgeotto',

//     'Pidgey',

//     'Pikachu',

//     'Poliwag',

//     'Poliwhirl',

//     'Poliwrath',

//     'Ponyta',

//     'Primeape',

//     'Psyduck',

//     'Raichu',

//     'Rapidash',

//     'Raticate',

//     'Rattata',

//     'Sandshrew',

//     'Sandslash',

//     'Seel',

//     'Slowbro',

//     'Slowpoke',

//     'Spearow',

//     'Squirtle',

//     'Tentacool',

//     'Tentacruel',

//     'Venomoth',

//     'Venonat',

//     'Venusaur',

//     'Victreebel',

//     'Vileplume',

//     'Vulpix',

//     'Wartortle',

//     'Weedle',

//     'Weepinbell',

//     'Wigglytuff',

//     'Zubat',
// ]

