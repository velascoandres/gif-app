import { IGif } from './GifGrid';

export type GifGridItemProps = {
    image: IGif;
};

export const GifGridItem = ({ image }: GifGridItemProps) => {

    return (
        <div className="card">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
        </div>

    );

};