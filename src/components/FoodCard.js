import React, { useContext, useState } from 'react';
import { CardContext } from '../context/cardContext';
import CardModal from './CardModal';

const FoodCard = () => {
    const [card, setCard] = useContext(CardContext);
    const totalPrice = card.reduce((acc, curr) => acc + curr.price, 0);
    const [isOpen, updateIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => updateIsOpen(true)}>Card : {card.length}</button><br/>
            <CardModal 
                isOpen={isOpen}
                updateIsOpen={updateIsOpen}
                totalPrice={totalPrice}
            />
        </div>
    )
}

export default FoodCard;