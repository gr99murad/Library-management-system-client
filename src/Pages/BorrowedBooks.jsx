import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if(user?.email){
            fetch(`https://library-management-system-server-five.vercel.app/borrowedBooks/${user.email}`)
            .then(res => res.json())
            .then(data => setBorrowedBooks(data));
        }
    }, [user]);

    const handleReturnBook = async (borrowedBookId, bookId) =>{
        const response = await fetch(`https://library-management-system-server-five.vercel.app/borrowedBooks/return/${borrowedBookId}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ bookId }),
        });

        const data = await response.json();
        if(data.success){
            setBorrowedBooks(borrowedBooks.filter(book => book._id !== borrowedBookId));
            Swal.fire('Success', 'Book returned successfully!', 'success');
            
        }
        else{
            Swal.fire('Error', data.message, 'error');
            
        }
    }
    return (
        <div className='px-16 md:px-8 py-32'>
            <h1 className='text-4xl font-bold text-center py-7'>borrowed books</h1>

            { borrowedBooks.length === 0 ? (
                <p>No borrowed Books.</p>
            ):(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {borrowedBooks.map((book) => (
                        <div key={book._id} className="card bg-[#e9e2e2] w-64 lg:w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img src={book.image} alt={book.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{book.name}</h2>
                          <p>{book.category}</p>
                          <p>Borrowed Date:{new Date(book.borrowedDate).toLocaleDateString()}</p>
                          <p>Return Date:{new Date(book.returnDate).toLocaleDateString()}</p>

                          <div className="card-actions">
                            <button
                              onClick={() => handleReturnBook(book._id, book.bookId)}
                              className="btn bg-accent"
                            >
                              Return Book
                            </button>
                          </div>
                        </div>
            
                        
                      </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BorrowedBooks;