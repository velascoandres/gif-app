import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Drago Ball'];

    const [categories, setCategories] = useState(['One Punch',])


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories
                        .map(
                            (category: string, index: number) => (
                                <GifGrid key={category} category={category} />
                            ),
                        )
                }
            </ol>
        </>
    );
};


export default GifExpertApp;