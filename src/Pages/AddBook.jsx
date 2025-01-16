import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


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
            const response = await axios.post('https://library-management-system-server-five.vercel.app/addBook',formData);
            if(response.data.success){
                Swal.fire('Success', 'Book added successfully!', 'success');
                navigate('/allBooks');
            }

        }
        catch(error){
            console.error('Error adding book:', error);
            Swal.fire('Error', 'Failed to add book!', 'error');
           
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
                <h3 className='text-xl font-bold text-center'>Book content</h3>
                <p>This section provides additional information about the book. It helps the reader get a deeper understanding of its context, themes, and what makes it special. Below are key elements to describe the book:</p>

                <div>
                    <h4 className='text-xl font-semibold'>Setting</h4>
                    <p>The setting provides context for the story. Example: Takes place in a small town in the 1920s, or on a spaceship in the future.</p>
                </div>

                <div>
                    <h4 className='text-xl font-semibold'>
                    Themes
                    </h4>
                    <p>Themes are the underlying messages or ideas explored in the book. Example: Friendship, Loyalty, Betrayal, Hope, etc.</p>

                </div>
                
            </div>

        </div>
    );
};

export default AddBook;