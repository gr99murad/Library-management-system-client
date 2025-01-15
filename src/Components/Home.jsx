import React from 'react';
import Banner from './Banner';
import BookCategories from './BookCategories';
import FeaturedAuthors from './FeaturedAuthors';
import UpComingEvents from './UpComingEvents';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <FeaturedAuthors></FeaturedAuthors>
            <UpComingEvents></UpComingEvents>

        </div>
    );
};

export default Home;