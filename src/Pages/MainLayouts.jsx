import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const MainLayouts = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
        <div className='mt-5'>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayouts;