import { useState, useEffect, Fragment } from 'react';
import { getGifs } from '../helpers/getGifs';
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
            getGifs(category).then(imgs => setimages(imgs),);
        },
        [ category ],
    );





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
