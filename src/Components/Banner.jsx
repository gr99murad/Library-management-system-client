import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Banner = () => {
    const setting ={
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }; 
   
    
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <Slider {...setting}>
                <div className='flex justify-center h-[300px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 text-white text-center rounded-lg p-6 shadow-lg'>
                    <h3 className='text-4xl font-bold mb-4 text-shadow-lg'>Welcome to Our Library</h3>
                    <p className='text-lg max-w-4xl mx-auto leading-relaxed'>Explore a world of knowledge with our extensive collection of books across various genres.</p>
                </div>
                <div className='flex justify-center h-[300px] bg-gradient-to-br from-green-500 via-cyan-400 to-green-600 text-white text-center rounded-lg p-6 shadow-lg'>
                    <h3 className='text-4xl font-bold mb-4 text-shadow-lg'>New Arrivals</h3>
                    <p className='text-lg max-w-4xl mx-auto leading-relaxed'>Check out the latest additions to our library and stay updated with trending titles.</p>
                </div>
                <div className='flex justify-center h-[300px] bg-gradient-to-br from-purple-500 via-cyan-400 to-purple-600 text-white text-center rounded-lg p-6 shadow-lg'>
                    <h3 className='text-4xl font-bold mb-4 text-shadow-lg'>Join Our Community</h3>
                    <p className='text-lg max-w-4xl mx-auto leading-relaxed'>Become a member today and enjoy exclusive benefits, including book reservation</p>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;