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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
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
