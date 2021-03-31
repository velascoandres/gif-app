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
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash"> Cargando...</p>}
            <div className="card-grid">
                {
                    images.map((image, index: number) => <GifGridItem key={image.id} index={index} image={image} />)
                }
            </div>
        </Fragment>
    );
};
