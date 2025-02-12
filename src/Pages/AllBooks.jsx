import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAvailable, setShowAvailable] = useState(false);
    const [viewMode, setViewMode] = useState('Card View');

    useEffect(() => {
        fetch('https://library-management-system-server-five.vercel.app/books')
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

        
    }, []);

    

    const toggleShowAvailable = () => {
      
      setShowAvailable(!showAvailable);
    };

    const handleViewChange = (e) => {
      e.preventDefault();
      setViewMode(e.target.value);
    }

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

    const filteredBooks = showAvailable ? books.filter(book => book.quantity > 0) : books;
    return (
      <div className='py-32'>

       <div className='flex gap-5 justify-center pt-4'>
       <button onClick={toggleShowAvailable} className='btn bg-primary text-white mb-4'>
          {showAvailable ? 'Show All Books' : 'show Available Books'}
        </button>

        <select onChange={handleViewChange} value={viewMode} className=' select select-bordered'>
        <option value="">Select View</option>

          <option value="Card">Card View</option>
          <option value="Table">Table View</option>

        </select>
       </div>
        {viewMode === 'Card' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredBooks.map((book) => (
            <div key={book._id} className="card bg-[#e9e2e2] max-w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={book.image} alt={book.name} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.name}</h2>
                <p>Author: {book.author}</p>
                <p>Category: {book.category}</p>
                <p>Quantity: {book.quantity}</p>
                <p>Rating: {book.rating}</p>
                <ReactStars
                  count={5}
                  value={book.rating}
                  size={24}
                  activeColor="#ffd700"
                ></ReactStars>
                <div className="card-actions">
                  <Link to={`/updateBook/${book._id}`}>
                    <button className="btn bg-accent">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        ):(
          <div className='overflow-x-auto'>
            <table className='table-auto w-full border-collapse border border-gray-300'>
            <thead className='bg-gray-300'>
              <tr>
                <th className='border border-gray-300 px-4 py-2'>Image</th>
                <th className='border border-gray-300 px-4 py-2'>Name</th>
                <th className='border border-gray-300 px-4 py-2'>Author</th>
                <th className='border border-gray-300 px-4 py-2'>Category</th>
                <th className='border border-gray-300 px-4 py-2'>Quantity</th>
                <th className='border border-gray-300 px-4 py-2'>Rating</th>
                <th className='border border-gray-300 px-4 py-2'>Actions</th>
                


              </tr>
            </thead>
            <tbody>
              {filteredBooks.map(book => (
                <tr key={book._id} className='hover:bg-gray-100'>
                  <td className='border border-gray-300 px-4 py-2'>
                    <img src={book.image} alt={book.name} className='w-16 h-16 rounded' />
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>{book.name}</td>
                  <td className='border border-gray-300 px-4 py-2'>{book.author}</td>
                  <td className='border border-gray-300 px-4 py-2'>{book.category}</td>
                  <td className='border border-gray-300 px-4 py-2'>{book.quantity}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                  <ReactStars
                  count={5}
                  value={book.rating}
                  size={24}
                  activeColor="#ffd700"
                ></ReactStars>
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                  <Link to={`/updateBook/${book._id}`}>
                    <button className="btn bg-accent">Update</button>
                  </Link>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    );
};

export default AllBooks;