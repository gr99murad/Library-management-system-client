import React from 'react';

const FeaturedAuthors = () => {


    const authors = [
        {
            name: 'J.K. Rowling',
            bio: 'Author of the Harry Potter series.',
            notableWorks: ['Harry Potter and the Sorcerer\'s Stone', 'Harry Potter and the Chamber of Secrets'],
          },
          {
            name: 'George R.R. Martin',
            bio: 'Author of the A Song of Ice and Fire series.',
            notableWorks: ['A Game of Thrones', 'A Clash of Kings'],
          },
          {
            name: 'Agatha Christie',
            bio: 'Known for her detective novels.',
            notableWorks: ['Murder on the Orient Express', 'The ABC Murders'],
          },
    ];
    return (
        <div>
            <h2 className='text-4xl font-semibold mb-4 text-center'>Featured Authors of the Month</h2>

            <div>
                {authors.map((author, index) => (
                    <div key={index} className='p-4 border border-gray-300 rounded-md bg-gray-50'>
                        <h3>{author.name}</h3>
                        <p>{author.bio}</p>
                        <h4>Notable Works:</h4>
                        <ul className='list-disc ml-5'>

                            {author.notableWorks.map((work, i) => (
                                <li key={i} className='mt-2'>{work}</li>
                            ))}
                        </ul>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default FeaturedAuthors;