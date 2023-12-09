import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='font-serif'>
            <div className='shadow-xl'>
                <Navbar></Navbar>
            </div>
            <Outlet className="max-h-100"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;