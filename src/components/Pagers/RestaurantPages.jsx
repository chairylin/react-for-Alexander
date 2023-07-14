
import { Restourant } from './../Restourant/Restourant';
import React, { useState } from 'react';
import { Tabs } from '../Tabs/Tabs';

export const RestaurantPages = ({ restaurants }) => {
    const [activeRestaurantIndex, setactiveRestaurantIndex] = useState(0);
    return (

        <div>
            <Tabs
                restaurants={restaurants} tabClick={setactiveRestaurantIndex} activeIndex={activeRestaurantIndex} />
            <Restourant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    );
};