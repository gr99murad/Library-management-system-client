import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const Navbar = () => {
  const {user, setOutUser} = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser().then(() => {
      console.log('User LOgged Out');
    })
    .catch(error => {
      console.error(error.message);
    });
  };
  const links = <>
  <li><a>Item 1</a></li>
        
  <li><a>Item 3</a></li>
  
  
  
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  {!user ? (
    <>
       <NavLink to="/auth/login">Login</NavLink>
       <NavLink to="/auth/register">Registers</NavLink>
    </>

  ):(
    <div className='dropdown dropdown-end'>
      <div className='tooltip tooltip-bottom' data-tip={user.displayName || "User"}>
        <img src={user.photoURL || 'avatar.png'} alt="User Avatar" className='w-10 h-10 rounded-full cursor-pointer' />
      </div>

      <ul className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
        <li><button onClick={handleLogout} className='btn btn-ghost bg-red-500'>Logout</button></li>
      </ul>
    </div>
  )
}

  </div>
</div>
    );
};

export default Navbar;