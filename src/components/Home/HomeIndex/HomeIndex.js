import React from 'react';
import Blog from '../Blog/Blog';
import FoodSelectTab from '../FoodSelectTab/FoodSelectTab';
import SearchField from '../SearchField/SearchField'

const HomeIndex = () => {
    return (
        <div>
            <SearchField></SearchField>
            <FoodSelectTab></FoodSelectTab>
            <Blog></Blog>
        </div>
    );
};

export default HomeIndex;