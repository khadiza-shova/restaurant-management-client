import React from 'react';
import { NavLink } from 'react-router-dom';

const MyAddedCard = ({addedSingleItem}) => {
    const {_id, name, image, price } = addedSingleItem;
    console.log(addedSingleItem);
    return (
        <div>
              <div className="card card-compact mx-auto first-letter:bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                   
                    
                    <p>{price}</p>
                   
                    <div className="card-actions justify-end">
                       <NavLink to={`/updateItem/${_id}`}> <button className=' button' >Update</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedCard;