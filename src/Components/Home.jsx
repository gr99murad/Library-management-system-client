import React from 'react';
import Banner from './Banner';
import BookCategories from './BookCategories';
import FeaturedAuthors from './FeaturedAuthors';
import UpComingEvents from './UpComingEvents';



const Home = () => {

    
    return (
        <div className=''>
            <div className='py-20 md:py-24'>
            <Banner></Banner>

            </div>
            
            <div className='py-20 md:py-24'>
            <BookCategories></BookCategories>
            </div>
            <div className='py-20 md:py-24'>
            <FeaturedAuthors></FeaturedAuthors>

            </div>
            <div className='py-20 md:py-24'>
            <UpComingEvents></UpComingEvents>

            </div>
            

        </div>
    );
};

export default Home;