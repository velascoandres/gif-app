import React, { useState } from 'react';

export interface ICategoryProps {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};


export const AddCategory = ({ setCategories }: ICategoryProps) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isAcceptable = inputValue.trim().length > 2;

        if (isAcceptable) {
            setCategories(categories => [inputValue, ...categories,]);
            setInputValue('');
        }
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
