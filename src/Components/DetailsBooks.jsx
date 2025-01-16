import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const DetailsBooks = () => {

    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const [book, setBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookDetails = async () => {
            const response = await fetch(`https://library-management-system-server-five.vercel.app/book/${id}`)
            const data = await response.json()
            setBook(data);
        };
        fetchBookDetails();
    }, [id]);

    const handleBorrowClick = (e) => {
        
        e.preventDefault();
        if(!user){
            setError('You must be logged in to borrow a book');
            return;
        }
        if(book.quantity === 0){
            setError('This book is out of stock');
            return;
        }
        // console.log('Borrow button clicked');
        setIsModalOpen(true);
    };


    const handleBorrowSubmit = async (e) => {
        e.preventDefault();
        if(!returnDate){
            setError('Please select a return date');
            return;
        }

        const borrowData = {
            name: user.displayName,
            email: user.email,
            returnDate,
        };

        
        try{
            const response = await fetch(`https://library-management-system-server-five.vercel.app/book/borrow/${id}`,{

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(borrowData),
            });

            const result = await response.json();
            if(result.success){
                Swal.fire('Success', 'Book borrowed successfully!', 'success');
                setIsModalOpen(false);
            }
            else{
                Swal.fire('Error', result.message, 'error');

                
            }
        } 
        catch(error){
            Swal.fire('Error','Error borrowing the book', 'error');
        }

    };

    const handleCloseModal = () =>{
        setIsModalOpen(false);
    };
    return (
      <div>
        {book ? (
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={book.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{book.name}</h2>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <p>Rating: {book.rating}</p>
              <p>Quantity: {book.quantity}</p>
              <div className="card-actions">
                <button
                  onClick={handleBorrowClick}
                  disabled={book.quantity === 0}
                  className="btn btn-primary"
                >
                  Borrow
                </button>
              </div>
            </div>

            
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {isModalOpen && (
            <div className='modal modal-open'>
                <div className='modal-box'>
                    <h2 className='text-xl font-bold mb-4'>Borrow Book</h2>
                    {error && <p>{error}</p>}
                    <form onSubmit={handleBorrowSubmit}>
                        <div className='form-control mb-4'>
                            <label className='label'>Name</label>
                            <input type="text" value={user ? user.displayName: ''} readOnly className='input input-bordered' />

                        </div>

                        <div className='form-control mb-4'>
                            <label className='label'>Email</label>
                            <input type="email" value={user ? user.email: ''} readOnly className='input input-bordered' />

                        </div>

                        <div className='form-control mb-4'>
                            <label className='label'>Return Date</label>
                            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className='input input-bordered' />

                        </div>
                        <div className='modal-action'>
                            <button type='submit' className='btn btn-primary'>Confirm</button>
                            <button className='btn' onClick={handleCloseModal}>Cancel</button>

                        </div>
                    </form>

                </div>

            </div>
        )}
      </div>
    );
};

export default DetailsBooks;