import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth();


    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const handleToggleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    const navLinks = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/addBooks">Add Book</NavLink></li>
        <li ><NavLink to="/allBooks">All Books</NavLink></li>
        <li ><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li>
    </>
    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Sign Out Successfully",
                    icon: "success",
                });
                navigate("/login")
            })
    }
    return (
        <div className="shadow-xl bg-indigo-300 text-black">
            <div className="navbar max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-white lg:text-lg rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <img className="w-24 " src="https://i.ibb.co/h84CxzQ/Capture-removebg-preview.png" alt="" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* <Link to='/login'><button>Login</button></Link> */}
                    <div className="flex items-center">
                        {
                            user ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="m-1">
                                            <div ><img className="rounded-full w-12" src={user.photoURL} alt="userPhoto" /></div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52  text-left text-black">
                                            <li><h4 className=" font-medium">{user.displayName}</h4></li>
                                            <li> <button onClick={handleLogout}>Logout</button> </li>
                                        </ul>
                                    </div> </>
                                : <Link to="/login"><button className="btn btn-sm btn-outline">Sign In</button></Link>
                        }

                        <div className="form-control px-4 py-3">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    onChange={handleToggleTheme}
                                    checked={theme === "light" ? false : true}
                                    className="toggle" />

                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;