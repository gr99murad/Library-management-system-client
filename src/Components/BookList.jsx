import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const BookList = () => {
    const {category} = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/books/${category}`)
        .then(res => res.json())
        .then(data => {
            setBooks(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError('Failed to load books data');
            setLoading(false);
        });
    }, [category]);
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {books.map(book => (
            <div key={book._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src= {book.image}
                alt={book.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{book.name}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Quantity: {book.quantity}</p>
              <ReactStars count={5} value={book.rating} size={24} activeColor='#ffd700'></ReactStars>
              <div className="card-actions">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default BookList;