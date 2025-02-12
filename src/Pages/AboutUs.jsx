import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-[#c0aea5] px-7 md:px-6 lg:px-4 mx-4 rounded-lg py-7'>
            <div>
            <h2 className='text-3xl font-bold text-text text-center'>About Us</h2>
            <p className='text-center text-text py-4'>GR_Library is a modern digital library that allows users to explore, borrow, and manage books effortlessly. 
            Our goal is to make book access easy for everyone, providing a seamless reading experience.
            </p>
            </div>
            <div className=' text-center'>
                <h3 className='text-xl font-semibold mt-4 py-4'>Why Choose Us?</h3>
                <ul className='list-disc list-inside text-text'>
                    <li>Wide collection of books in various categories</li>
                    <li>Easy book borrowing and management</li>
                    <li>24/7 availability for book lovers</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;