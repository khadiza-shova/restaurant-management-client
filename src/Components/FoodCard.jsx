import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
const FoodCard = ({ Food }) => {

    const {_id, name, image, cata, price, origin, shortDescription } = Food;
    return (
        <div>
            <div className="card card-compact first-letter:bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{cata}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                       <NavLink to={`/singleItem/${_id}`}> <button className=' button' >Details</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;