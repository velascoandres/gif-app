import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    };


    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
        </form>
    );

};
