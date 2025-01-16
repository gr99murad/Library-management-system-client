import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        quantity: 0,
        author: '',
        category: 'Fiction',
        description: '',
        rating: 1,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/addBook',formData);
            if(response.data.success){
                alert('Book added successfully!');
                navigate('/allBooks');
            }

        }
        catch(error){
            console.error('Error adding book:', error);
            alert('Failed to add book');
        }
    };
    return (
        <div className=''>
            <h2 className='text-4xl font-bold my-5'>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label'>Image URL:</label>
                    <input className='input input-bordered w-96' type="text" name='image' value={formData.image} onChange={handleChange} />
                </div>
                <div className='flex gap-5 my-5'>
                <div>
                    <label className='label'>Book Name:</label>
                    <input className='input input-bordered' type="text" name='name' value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label className='label'>Quantity:</label>
                    <input className='input input-bordered' type="number" name='quantity' value={formData.quantity} onChange={handleChange} />
                </div>
                </div>
                <div className='flex gap-5 mt-5'>
                <div>
                    <label className='label'>Author Name:</label>
                    <input className='input input-bordered' type="text" name='author' value={formData.author} onChange={handleChange} />
                </div>
                <div>
                    <label className='label'>Category:</label>
                   <select className='select select-bordered'  name='category' value={formData.category} onChange={handleChange}>
                        <option value="fiction">Fiction</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                        <option value="children's Books">Children's Books</option>
                    
                    </select> 
                </div>
                </div>
                <div className='flex gap-5 my-5'>
                <div>
                    <label className='label'>Description:</label>
                    <textarea className='input input-bordered' name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>

                <div>
                    <label className='label'>Rating:</label>
                    <input className='input input-bordered' type="number" name='rating' value={formData.rating} min="1" max="5" onChange={handleChange} />
                </div>
                </div>
                <button className='btn btn-primary my-5' type='submit'>Add Book</button>
                
            </form>
            <div>
                <h3>Book content</h3>
                <p>Provide more information about the book</p>
            </div>

        </div>
    );
};

export default AddBook;