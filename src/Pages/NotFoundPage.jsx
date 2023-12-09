import React from 'react';
import NotFound from '../assets/404Page.jpg'
import { NavLink } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';
const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
            <PageTitle title="Cafeu || Page Not Found"></PageTitle>
            <div>
                <img src={NotFound} className='' alt="" />
                <NavLink to="/">
                    <button className='button mt-10 ml-10'>Back to Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFoundPage;