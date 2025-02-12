import React from 'react';
import Banner from './Banner';
import BookCategories from './BookCategories';
import FeaturedAuthors from './FeaturedAuthors';
import UpComingEvents from './UpComingEvents';
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';



const Home = () => {

    
    return (
        <div className=''>
            <div className='mt-10 py-20 md:py-24'>
            <Banner></Banner>

            </div>
            
            <div className='py-20 md:py-24'>
            <BookCategories></BookCategories>
            </div>
            <div id='aboutUs' className='py-20 md:py-24'>
                <AboutUs></AboutUs>

            </div>
            <div className='py-20 md:py-24'>
            <FeaturedAuthors></FeaturedAuthors>

            </div>
            <div className='py-20 md:py-24'>
            <UpComingEvents></UpComingEvents>

            </div>
            <div id='contact' className='py-20 md:py-24'>
                <ContactUs ></ContactUs>

            </div>
            
            

        </div>
    );
};

export default Home;