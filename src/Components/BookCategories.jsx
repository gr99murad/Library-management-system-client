import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://library-management-system-server-five.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to Load categories");
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <h2 className="text-4xl text-center text-text  font-bold mt-10">
        Book Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center justify-center place-items-center">
        {categories.map((category,index) => (
          <div className="my-4 py-4 ">
            
            <div key={index} className="bg-[#d4c4c4] w-64 rounded-xl shadow-xl text-center hover:bg-[#a88a8a]">
            <Link to={`/books/${category.category}`}>
                <div className="card-body">
                
                  <h2 className="text-xl font-semibold text-text ">{category.category}</h2>
                
                </div>
                </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
