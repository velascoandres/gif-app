import { useState } from "react";
import { AddCategory } from './components/AddCategory';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Drago Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Drago Ball'])


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
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