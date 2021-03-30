import { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
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


    const { data: images, loading } = useFetchGifs(category);


    return (
        <Fragment>
            <h3>{category}</h3>
            { loading && <p> Cargando...</p>}
            <div className="card-grid">
                {
                    images.map(image => <GifGridItem key={image.id} image={image} />)
                }

            </div>
        </Fragment>
    );
};
