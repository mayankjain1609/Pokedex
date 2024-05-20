"use client";
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { api } from '~/trpc/react';
import PokemonCard from './PokemonCard';


const PokemonRow = () => {

    const [name, setName] = useState("");
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(name);
    }

    const {data , isError , isLoading} = api.pokemon.getPokemon.useQuery({ name: search } , {enabled: !!search});
    // console.log("decedcrfcfgt" , api.pokemon.getByType.useQuery({type: "Electric"}));
    // console.log("cdscsdcsdcdsvc" , data);




    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <TextField id="outlined-basic" label="Enter Pokemon" value={name} variant="outlined" onChange={e => setName(e.target.value)} />
            </div>
                <Button variant="outlined" type='submit'>Submit</Button>
        </form>
        {data?.id && <PokemonCard data={data} />}
        {isLoading && <h1>....Loading ...</h1>}
        {isError && <h1>Something went wrong ....</h1>}
        </>

    )
}

export default PokemonRow