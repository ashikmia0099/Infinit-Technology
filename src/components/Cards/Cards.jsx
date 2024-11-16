import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {


    const [cards,setCard ] = useState([]);


    useEffect( () => {
        fetch('/phonesData.json')
        .then(res => res.json())
        .then(data =>setCard(data))


    }, [])

    

    return (
        <div className=''>
            
        <div className='grid grid-cols-3 gap-4'>
           
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        
        </div>
    );
};

export default Cards;