import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import PageTitle from './PageTitle';

const SingleItem = () => {

    const singleItem = useLoaderData();
    const paramsData = useParams();
    const data = singleItem.find(item => item._id == paramsData.id);
    console.log(data);
    const {_id, name, image, cata, price, addedName, origin, shortDescription } = data;


    return (
        <div className="my-10">
             <PageTitle title="Cafeu || SingleItem"></PageTitle>
            <div className="card card-compact w-1/2 mx-auto first-letter:bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{cata}</p>
                    <p>{price}</p>
                    <p>{origin}</p>
                    <h2>Made By: {addedName}</h2>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                       <NavLink to={`/foodPurchase`}> <button className=' button' >Order</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;