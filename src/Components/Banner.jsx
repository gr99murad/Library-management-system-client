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
        <div >
            <Slider {...setting}>
                <div>
                    <h3>Welcome to Our Library</h3>
                    <p>Explore a world of knowledge with our extensive collection of books across various genres.</p>
                </div>
                <div>
                    <h3>New Arrivals</h3>
                    <p>Check out the latest additions to our library and stay updated with trending titles.</p>
                </div>
                <div>
                    <h3>Join Our Community</h3>
                    <p>Become a member today and enjoy exclusive benefits, including book reservation</p>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;