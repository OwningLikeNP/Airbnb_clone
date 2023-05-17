import React from 'react';
import './Card.css'

//Creating cards component so that it can be reused multiple times to show any number of cards as required

function Card({ src, title, description, price }) {
    return (
        //Each card will contain an image, title, description and price
        <div className='card'> 
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card