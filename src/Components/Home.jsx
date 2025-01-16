import React from 'react';
import Banner from './Banner';
import BookCategories from './BookCategories';
import FeaturedAuthors from './FeaturedAuthors';
import UpComingEvents from './UpComingEvents';



const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='py-10'>
            <BookCategories></BookCategories>
            </div>
            <FeaturedAuthors></FeaturedAuthors>
            <UpComingEvents></UpComingEvents>

        </div>
    );
};

export default Home;