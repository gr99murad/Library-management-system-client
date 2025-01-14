import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookList = () => {
    const {category} = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/books/${category}`)
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(err => console.error(err));
    }, [category]);
    return (
        <div>
            
        </div>
    );
};

export default BookList;