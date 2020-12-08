import React, { useEffect, useState } from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { fakeFoodIteams } from '../../../fakeData/fakeFoodIteams';
import FoodIteam from '../FoodIteam/FoodIteam';
import './FoodSelectTab.css'

const FoodSelectTab = () => {
    const [foodIteams, setFoodIteams] = useState([]);


    useEffect(() => {
        setFoodIteams(fakeFoodIteams)
    }, [])

    //console.log(foodIteams)

    const breakFast = foodIteams.filter(food => food.category === 'breakfast');
    const lunch = foodIteams.filter(food => food.category === 'lunch');
    const dinner = foodIteams.filter(food => food.category === 'dinner');

    return (
        <Container className="food-selector">
            <Tabs defaultActiveKey="lunch" id="uncontrolled-tab-example">
                <Tab eventKey="breakfast" title="Breakfast">
                    {
                        breakFast && breakFast.map(food => <FoodIteam food={food} ></FoodIteam>)
                    }
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                   {
                       lunch && lunch.map(food => <FoodIteam food={food}></FoodIteam>)
                   }
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    {
                        dinner && dinner.map(food => <FoodIteam food={food}></FoodIteam>)
                    }
                </Tab>
            </Tabs>

            
        </Container>
    );
};

export default FoodSelectTab;