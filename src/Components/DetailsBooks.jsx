import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import Modal from './Modal';

const DetailsBooks = () => {

    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const [book, setBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookDetails = async () => {
            const response = await fetch(`http://localhost:5000/book/${id}`)
            const data = await response.json()
            setBook(data);
        };
        fetchBookDetails();
    }, [id]);

    const handleBorrowClick = () => {
        
        if(!user){
            setError('You must be logged in to borrow a book');
            return;
        }
        console.log('Borrow button clicked');
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
            const response = await fetch(`http://localhost:5000/book/borrow/${id}`,{

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(borrowData),
            });

            const result = await response.json();
            if(result.success){
                alert('Book borrowed successfully');
                setIsModalOpen(false);
            }
            else{
                setError(result.message);
            }
        } 
        catch(error){
            setError('Error borrowing the book');
        }

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

            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleBorrowSubmit}>
                  <h3>Borrow {book.name}</h3>
                  <p>Return Date:</p>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>
                {error && <p>{error}</p>}
              </Modal>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};

export default DetailsBooks;