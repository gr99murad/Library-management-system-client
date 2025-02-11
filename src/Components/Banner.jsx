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
        <div className='max-w-screen-xl mx-auto px-7 md:px-6 lg:px-4 py-20'>
            <Slider {...setting}>
                <div className='relative '>
                    <img className='h-96  w-full object-cover' src="https://i.ibb.co.com/s9jCp8BL/handsome-guy-study-library-1.jpg" alt="Library" />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 rounded-lg text-center text-white px-8 md:px-4 '>
                    <div>
                    <h3 className='text-2xl md:text-4xl font-bold mb-4 text-shadow-lg'>Welcome to Our Library</h3>
                    <p className='text-sm md:text-lg max-w-4xl mx-auto leading-relaxed'>Explore a world of knowledge with our extensive collection of books across various genres.</p>
                    </div>
                </div>
                </div>

                <div className='relative'>
                    <img className='h-96 w-full object-cover' src="https://i.ibb.co.com/hTrVZ65/man-library-with-tablet.jpg" alt="New Arrivals" />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 rounded-lg text-center text-white px-8 md:px-4 '>
                    <div>
                    <h3 className='text-2xl md:text-4xl font-bold mb-4 text-shadow-lg'>New Arrivals</h3>
                    <p className='text-sm md:text-lg max-w-4xl mx-auto leading-relaxed'>Check out the latest additions to our library and stay updated with trending titles</p>
                    </div>
                </div>
                </div>


                <div className='relative'>
                    <img className='h-96 w-full object-cover' src="https://i.ibb.co.com/GQcvMZRQ/9176169-6607.jpg" alt="Join Our Community" />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 rounded-lg text-center text-white px-8 md:px-4 '>
                    <div>
                    <h3 className='text-2xl md:text-4xl font-bold mb-4 text-shadow-lg'>Join Our Community</h3>
                    <p className='text-sm md:text-lg max-w-4xl mx-auto leading-relaxed'>Become a member today and enjoy exclusive benefits, including book reservation</p>
                    </div>
                </div>
                </div>
                

            </Slider>
        </div>
    );
};

export default Banner;