import { useState, useEffect, Fragment } from 'react';
import { IGiphyResponse } from '../interfaces/api-response.interface';
import { GifGridItem } from './GifGridItem';


export interface IGifGridProps {
    category: string;
}

export interface IGif {
    id: string;
    title: string;
    url: string;
}


export const GifGrid = ({ category }: IGifGridProps) => {


    const [images, setimages] = useState<IGif[]>([]);

    useEffect(
        () => {
            getGifs();
        },
        [],
    );


    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=ellosIXkWQTUkPvCR5qalQYT1ct1rs1f&q=Rick and Morty&limit=10'
        const response = await fetch(url);
        const { data }: IGiphyResponse = await response.json();

        const gifs: IGif[] = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }));
        setimages(gifs);
    };


    return (
        <Fragment>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(image => <GifGridItem key={image.id} image={image} />)
                }

            </div>
        </Fragment>
    );
};
