import React from 'react'
import Image from 'next/image';
import "~/styles/PokemonCard.css"

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
// function toFirstLetterUpperCase(str: string) {
//     if(str?.[0] !== undefined && str?.[0] >= 'a' && str?.[0] <= 'z') str[0] = str[0] + Number('A') - 'a';
// }

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonCard = ({ data }: PokemonCardProps) => {
    const { id, name, sprite, detailPageURL, types, weight, height } = data;
    return (
        <div className='flex flex-col card-main'>
            <div className='pok-name'>
                <p className='pok-p-name'>{name && name}</p>
            </div>
            <div className='pok-img'>
                <Image src={sprite} height={150} width={150} alt='Pokemon' />
            </div>
            <div className="pok-details flex">
                <div className='flex flex-col justify-between p-6'>
                    <div className='pok-types flex justify-start items-center'>
                        <p className='small-title w-16'>Types: </p>
                        {types?.map(type => [
                            <li key={type.typeId} className='pok-type m-2 text-center p-2'>{capitalizeFirstLetter(type.typeName)} </li>
                        ])}
                    </div>
                    <div className="pok-weight flex justify-start">
                        <p className='small-title w-16'>Weight: </p>
                        <li className="pok-type mx-2 w-10 p-2 text-center"> {weight}</li>
                    </div>
                    <div className="pok-height flex justify-start">
                        <p className='small-title w-16'>Height: </p>
                        <li className="pok-type mx-2 w-10 text-center p-2">{height}</li>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard