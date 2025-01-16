import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



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

        <ToastContainer></ToastContainer>

        
        </div>
    );
};

export default MainLayouts;