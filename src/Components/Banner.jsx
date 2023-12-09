import React from 'react';
import banner1 from "../assets/baner1.png";
import banner2 from "../assets/baner2.png";
import banner3 from "../assets/banner3.png";
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
     
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage:`url(${banner3})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md space-y-3">
                        <h4 className='text-3xl font-semibold '>Best in Cafeu</h4>
                        <h1 className='text-2xl'>
                        BBQ Chicken Salad with Creamy Avocado</h1>
                        <NavLink to='/allFood'>
                            <button className='button mt-5'>All Menu</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;