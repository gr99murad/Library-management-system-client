import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById("aboutUs");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { user, setOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // console.log('User LOgged Out');
        // setOutUser(null);
        Swal.fire("Success", "Logout successfully!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("Error", error.message, "error");
      });
  };
  const links = (
    <>
      <li>
        <Link to="/" className="text-text hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <button
          onClick={scrollToAboutUs}
          className="text-text hover:text-primary"
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={scrollToContact}
          className="text-text hover:text-primary"
        >
          Contact
        </button>
      </li>
      <li>
        <Link to="/allBooks" className="text-text hover:text-primary">
          All Books
        </Link>
      </li>
      <li>
        <Link to="/addBook" className="text-text hover:text-primary">
          Add Book
        </Link>
      </li>
      <li>
        <Link to="/borrowedBooks" className="text-text hover:text-primary">
          Borrowed Books
        </Link>
      </li>

      {user && (
        <>
          <li>
            <Link to="/profile" className="text-text hover:text-primary">
              Profile
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-[#d4c4c4] fixed top-0 w-full z-50 shadow-lg ">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#e9e2e2] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink className="h-10 w-20">
            <img
              src="https://i.ibb.co.com/wZ8v3zcd/Screenshot-2025-02-11-210143-removebg-preview.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="px-2">
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {!user ? (
            <>
              <div className="flex gap-6">
                <Link to="/auth/login" className="btn btn-outline bg-primary ">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-outline">
                  Registers
                </Link>
              </div>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                className="tooltip tooltip-bottom"
                tabIndex={0}
                role="button"
                aria-label="User Menu"
              >
                <img
                  src={user.photoURL || "avatar.png"}
                  alt=" Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow"
              >
                <li className="disabled">
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn bg-[#937769] text-text"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
