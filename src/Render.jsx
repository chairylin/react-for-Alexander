import React from 'react';
import { Restourant } from './components/Restourant/Restourant';
import { restaurants } from './constants/fixtures';


export const Render = () => {
    return (
        <div>
            {restaurants?.map((restaurant) => (
                <Restourant restaurant={restaurant} />
            ))}
        </div>
    );
};
