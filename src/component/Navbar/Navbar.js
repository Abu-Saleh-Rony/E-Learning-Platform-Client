import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BookOpenIcon, ComputerDesktopIcon, ServerIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../Context/UserContext";
import { UserIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("light");
  const storedMode = localStorage.getItem("mode");
  if (storedMode == null) {
    localStorage.setItem("mode", "light");
  }
  useEffect(() => {
    setMode(storedMode);
  }, [storedMode]);

  const handleClick = () => {
    if (storedMode === "light" || storedMode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("Light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const navigate = useNavigate();
  const handleUserProfile = () => {
    navigate("/userProfile");
  };

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink
                  className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <h2>{mode}</h2>
                  <button className={`button-${mode}`} onClick={handleClick}>
                    <input type="checkbox" className="toggle" checked />
                  </button>
                </NavLink>
                {/* sm nav */}
                <div className="md:hidden flex flex-col">
                  <p onClick={handleUserProfile} className="mr-3 text-xl">
                    {user?.displayName}
                  </p>

                  {user?.uid || user?.photoURL ? (
                    <>
                      <img
                        onClick={handleUserProfile}
                        title={user?.displayName}
                        className="w-[50px] h-[50px] rounded-[50%]"
                        src={user?.photoURL}
                        alt=""
                      />

                      <NavLink className="ml-5 mr-3" onClick={handleLogOut}>
                        <button className="btn btn-outline btn-info">
                          Logout
                        </button>
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink className="btn btn-ghost normal-case text-purple-700 text-xl">
                        <UserIcon className="w-6 h-6" />
                      </NavLink>

                      <NavLink to="/login">
                        <button className="btn btn-outline btn-warning">
                          Login
                        </button>
                      </NavLink>
                    </>
                  )}
                </div>
                {/* sm nav */}
              </li>
            </ul>
          </div>

          <NavLink to="/courses" className="btn btn-ghost normal-case text-xl">
            <BookOpenIcon className="w-6 h-6" />
            E-Learning Platform
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>

            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                <h2>{mode}</h2>
                <button className={`button-${mode}`} onClick={handleClick}>
                  <input type="checkbox" className="toggle" checked />
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex userInfo">
          <p onClick={handleUserProfile} className="mr-3 text-xl">
            {user?.displayName}
          </p>

          {user?.uid || user?.photoURL ? (
            <>
              <img
                onClick={handleUserProfile}
                title={user?.displayName}
                className="w-[50px] h-[50px] rounded-[50%]"
                src={user?.photoURL}
                alt=""
              />

              <NavLink className="ml-5 mr-3" onClick={handleLogOut}>
                <button className="btn btn-outline btn-info">Logout</button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="btn btn-ghost normal-case text-purple-700 text-xl">
                <UserIcon className="w-6 h-6" />
              </NavLink>

              <NavLink to="/login">
                <button className="btn btn-outline btn-primary">Login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
