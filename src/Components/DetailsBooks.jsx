import React, { useContext, useEffect, useState } from 'react';
import { data, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const DetailsBooks = () => {
    const {id} = useParams();
    const [book, setBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const books = useLoaderData();
    // console.log(books);

    // useEffect(() => {
    //     const selectedBook = books.find((b) => b._id === id);
    //     setBook(selectedBook);
    // }, [books,id])

    
    const handleBorrow = (e) => {
        e.preventDefault();
        const returnDate = e.target.returnDate.value;


        fetch('/borrowBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookId: book._id,
                returnDate: returnDate,
                userName: user.displayName,
                userEmail: user.email,
            }),
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                alert('Book borrowed successfully!');
                setShowModal(false);
                navigate('/borrowedBooks');
            }
            else{
                alert('Book out of stock');
            }
        })
        .catch(err => console.error('Error:', err));
    };
    return (
        <div>
            {books && (
                <div className='card bg-base-100 w-96 shadow-xl'>
                    <div className='card-body'>
                    <h1 className='card-title'>{books.name}</h1>
                    <p>{books.description}</p>
                    <p>Quantity: {books.quantity}</p>
                    <div className='card-actions justify-end'>
                    <button className='btn btn-primary' onClick={() => setShowModal(true)} disabled={books.quantity <= 0}>Borrow</button>
                    </div>
                </div>
                </div>
            )}


            {showModal && (
                <div className='modal-overlay'>
                    <div className='modal'>
                    <div className='modal-content'>
                        <h2>Borrow Book</h2>
                        <form onSubmit={handleBorrow}>
                            <p>Name: {user.displayName}</p>
                            <p>Email: {user.email}</p>
                            <label>
                                Return Date: <input type='date' name='returnDate' required></input>
                            </label>
                            <div className='modal-actions'>
                            <button type='submit' className='btn btn-success'>Confirm</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>

                    </div>

                </div>
                </div>
            )}
        </div>
    );
};

export default DetailsBooks;