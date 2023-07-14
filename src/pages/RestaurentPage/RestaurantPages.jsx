import { Restourant } from "../../components/Restourant/Restourant";
import React, { useState } from "react";
import { Tabs } from "../../components/Tabs/Tabs";
import { restaurants } from './../../constants/fixtures';

export const RestaurantPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    return (
        <div>
            <Tabs
                restaurants={restaurants}
                onTabClick={setActiveRestaurantIndex}
                activeIndex={activeRestaurantIndex}
            />
            <Restourant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    );
};