import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError('Failed to Load categories');
            setLoading(false);
        });
    }, []);
    return (
        <div className=''>
            {categories.map(category => (
                <div className='my-4 py-4'>
                    <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{category.category}</h2>
                  <div className="card-actions justify-end">
                    <Link to={`/books/${category.category}`}><button className="btn btn-primary">View Books</button></Link>
                  </div>
                </div>
              </div>
                </div>
            ))}
        </div>
    );
};

export default BookCategories;