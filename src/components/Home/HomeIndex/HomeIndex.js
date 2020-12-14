import React from 'react';
import Blog from '../Blog/Blog';
import FoodCheckoutButton from '../FoodCheckoutButton/FoodCheckoutButton';
import FoodSelectTab from '../FoodSelectTab/FoodSelectTab';
import SearchField from '../SearchField/SearchField'

const HomeIndex = () => {
    return (
        <div>
            <SearchField></SearchField>
            <FoodSelectTab></FoodSelectTab>
            <FoodCheckoutButton></FoodCheckoutButton>
            <Blog></Blog>
        </div>
    );
};

export default HomeIndex;