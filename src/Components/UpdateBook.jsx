import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        fetch(`https://library-management-system-server-five.vercel.app/book/${id}`)
        .then(res => res.json())
        .then(data => {
            setBook(data);
            setImage(data.image);
            setName(data.name);
            setAuthor(data.author);
            setCategory(data.category);
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

        if(!name || !author || !category || rating < 1 || rating > 5){
            setError('Please fill all fields correctly');
            return;
        }
        const updatedBook = {
            name,
            author,
            category,
            rating,
            image,
        };
        fetch(`https://library-management-system-server-five.vercel.app/book/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })
        .then(res => res.json())
        .then(() => {
             Swal.fire('Success', 'Book updated successfully!', 'success');
            
            navigate(`/books/${category}`);
            
        })
        .catch(error => {
            Swal.fire('Error', 'Failed to update book', 'error');
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
            <h2 className='text-4xl font-bold text-center'>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='label'>Image URL:</label>
                    <input className='input input-bordered w-96' type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter image URL' />

                </div>
                <div className='form-group'>
                    <label className='label'>Name:</label>
                    <input className='input input-bordered' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className='form-group'>
                    <label className='label'> Author Name:</label>
                    <input className='input input-bordered' type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

                </div>
                <div className='form-group'>
                    <label className='label'>Category</label>
                    <select  value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="">Select one</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Children's Books">Children's Books</option>
                    </select>

                </div>

                <div className='form-group'>
                    <label className='label'>Rating</label>
                    <input className='input input-bordered' type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />

                </div>
                <button className='btn btn-primary my-4' type='submit'>Submit</button>

            </form>
            
        </div>
    );
};

export default UpdateBook;