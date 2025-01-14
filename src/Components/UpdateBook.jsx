import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({});
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
        .then(res => res.json())
        .then(data => {
            setBook(data);
            setImage(data.image);
            setName(data.name);
            setAuthor(data.category);
            setRating(data.rating);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError('Failed to load book data');
            setLoading(false);
        });
    }, [id]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const updatedBook = {
            name,
            author,
            category,
            rating,
            image,
        };
        fetch(`http://localhost:5000/book/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })
        .then(res => res.json())
        .then(data => {
            navigate(`/books/${category}`);
            
        })
        .catch(error => {
            setError('Failed to update book');
            console.error(error);
        });
    };

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

    

    return (
        <div className='form-container'>
            <h2>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Image URL:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter image URL' />

                </div>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className='form-group'>
                    <label> Author Name</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

                </div>
                <div className='form-group'>
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="fiction">Fiction</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                        <option value="children's Books">Children's Books</option>
                    </select>

                </div>

                <div className='form-group'>
                    <label>Rating</label>
                    <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />

                </div>
                <button type='submit'>Submit</button>

            </form>
            
        </div>
    );
};

export default UpdateBook;