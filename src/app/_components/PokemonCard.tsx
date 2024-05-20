import React from 'react'
import Image from 'next/image';

type PokemonCardProps = {
    data: {
        name: string
        id: string
        sprite: string
        detailPageURL: string | null;
        types: {
            typeId: string;
            typeName: string;
            pokemonId: string;
        }[]
        weight: number;
        number: string;
        height: number;
        collectibles_slug: string | null;
        featured: string | null;
        slug: string;
        ThumbnailAltText: string | null;

    }
};


const PokemonCard = ({ data }: PokemonCardProps) => {
    const { id, name, sprite, detailPageURL, types } = data;
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                <Image src={sprite} height={500} width={500} alt='Pokemon' />
            </div>
            <div>
                {types?.map(type => [
                    <li key={type.typeId}>{type.typeName}</li>
                ])}
            </div>
        </div>
    )
}

export default PokemonCard