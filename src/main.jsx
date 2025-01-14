import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import MainLayouts from './Pages/MainLayouts.jsx';
import Login from './Authentication/SignIn.jsx';
import Register from './Authentication/Register.jsx';
import AuthProvider from './context/AuthContext/AuthProvider';
import AllBooks from './Pages/AllBooks.jsx';
import AddBook from './Pages/AddBook.jsx';
import BorrowedBooks from './Pages/BorrowedBooks.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import BookCategories from './Components/BookCategories.jsx';
import BookList from './Components/BookList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks> ,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
      {
        path: "/categories",
        element: <BookCategories></BookCategories>,
      },
      {
        path: "/books/:category",
        element: <BookList></BookList>,
      },
    ]
  },
  {
    path: "/auth/login",
    element:<Login></Login>,
  },
  {
    path: "/auth/register",
    element:<Register></Register>,
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
