import React, { useEffect, useState } from 'react';
import SingleTopFood from './SingleTopFood';
import { NavLink } from 'react-router-dom';

const TopFood = () => {

    const [topFood, setTopFood] = useState([]);

    useEffect(() => {
        fetch("https://restaurant-management-server-gamma.vercel.app/topFood")
            .then(res => res.json())
            .then(data =>
                setTopFood(data)
            )
    }, [])


    return (
        <div>

            <h2 className='text-center text-3xl font-semibold my-10'>Top Selling Food</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                {
                    topFood.map(topF => <SingleTopFood key={topF._id} topF={topF}></SingleTopFood>)
                }

            </div>

            <div className='my-20 flex justify-center'>

                <NavLink to={`/allFood`}><button className='button'>See All</button></NavLink>
                
            </div>
        </div>
    );
};

export default TopFood;