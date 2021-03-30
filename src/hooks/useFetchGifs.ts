import { useState, useEffect } from 'react'
import { IGif } from '../components/GifGrid';
import { getGifs } from '../helpers/getGifs';

export interface IFetchGifsState{

    data: IGif[];
    loading: boolean;

}


export const useFetchGifs = (category: string) => {
    
    const [state, setstate] = useState<IFetchGifsState>({
        data: [],
        loading: true,
    });

    useEffect(
        () => {
            getGifs(category)
            .then(imgs => setstate(
                {
                    data: imgs,
                    loading: false,
                },
               ),
            );
        },
        [ category ],
    );

    return state;

}

