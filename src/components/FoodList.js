import React from 'react';
import database from '../data/feeds.json';
import ListPage from './ListPage';

const FoodList = () => {
    return (
        <div>
            {
                database.map((item) => {
                    return (
                        <ListPage 
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        key={item.id}
                    />
                    )
                })
            }
        </div>
    )
}

export default FoodList;