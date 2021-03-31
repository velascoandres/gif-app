import { IGif } from './GifGrid';

export type GifGridItemProps = {
    image: IGif;
    index?: number;
};

export const GifGridItem = ({ image, index = 0 }: GifGridItemProps) => {

    const animationClass = index % 2 === 0 ? 'animate__slideInLeft' : 'animate__slideInRight';

    const className = `card animate__animated ${animationClass}`;

    return (
        <div className={className}> 
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
        </div>

    );

};
