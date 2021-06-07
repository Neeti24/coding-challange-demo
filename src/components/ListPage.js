import React, { useContext } from 'react';
import { CardContext } from '../context/cardContext';

const ListPage = (props) => {
    const [card, setCard] = useContext(CardContext);
    const addToCard = () => {
        const card = {name: props.name, price:props.price, image:props.image}
        setCard(curr => [...curr, card]);
    }
    return (
        <div className="listContainer">
            <div>
                <div><img src={props.image} /></div>
                <div>
                    {props.name} - {props.price}
                </div>
                <button className="button"  onClick={addToCard}>Add to card</button>
            </div>
        </div>
    )
}

export default ListPage;