import { useState } from "react";

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Drago Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Drago Ball'])


    const handleAdd = () => {
        setCategories(currentCategories => [...currentCategories, 'Nopor'])
    };


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={(event) => handleAdd()} >Agregar</button>

            <ol>
                {
                    categories
                        .map(
                            (category: string, index: number) => {
                                return <li key={category}>{category}</li>;
                            }
                        )
                }
            </ol>
        </>
    );
};


export default GifExpertApp;