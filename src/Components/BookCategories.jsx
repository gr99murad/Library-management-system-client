import React, { useEffect, useState } from 'react';

const BookCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error));
    }, []);
    return (
        <div className=''>
            {categories.map(category => (
                <div className='my-4 py-4'>
                    <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{category.category}</h2>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Books</button>
                  </div>
                </div>
              </div>
                </div>
            ))}
        </div>
    );
};

export default BookCategories;