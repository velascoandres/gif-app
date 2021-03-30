import { useState } from "react";
import { AddCategory } from './components/AddCategory';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Drago Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Drago Ball'])


    const handleAdd = () => {
        setCategories(currentCategories => [...currentCategories, 'Nopor'])
    };


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
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