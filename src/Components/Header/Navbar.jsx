import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
 
  const handleLogout = () => {
    logout().then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Sign Out Successfully",
        icon: "success",
      });
      navigate("/login");
    });
  };

  return (
    <div className="shadow-xl bg-[#86B6F6]  ">
      <div className="max-w-6xl mx-auto  flex justify-between items-center ">
        <div className="flex items-center pl-5">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="text-black">
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
              className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-white lg:text-lg rounded-box w-52"
            >
             <ul className="lg:hidden">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-black font-medium"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addBooks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-[#000000] font-medium"
                  }
                >
                  Add Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allBooks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-black font-medium"
                  }
                >
                  All Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/borrowedBooks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-black font-medium"
                  }
                >
                  Borrow Books
                </NavLink>
              </li>
            </ul>
            </ul>
          </div>
          <img
            className="w-24 "
            src="https://i.ibb.co/h84CxzQ/Capture-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <ul className="hidden  lg:flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-black font-medium"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addBooks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-[#000000] font-medium"
                  }
                >
                  Add Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allBooks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-black font-medium"
                  }
                >
                  All Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/borrowedBooks"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#176B87] font-semibold  px-4 py-2 rounded"
                      : "text-black font-medium"
                  }
                >
                  Borrow Books
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="flex items-center">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="m-1">
                    <div>
                      <img
                        className="rounded-full w-12"
                        src={user.photoURL}
                        alt="userPhoto"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52  text-left text-black"
                  >
                    <li>
                      <h4 className=" font-medium">{user.displayName}</h4>
                    </li>
                    <li>
                      {" "}
                      <button onClick={handleLogout}>Logout</button>{" "}
                    </li>
                  </ul>
                </div>{" "}
              </>
            ) : (
              <Link to="/login">
                <button className="text-black hover:bg-[#176B87] hover:text-white hover:btn-sm hover:rounded">Sign In</button>
              </Link>
            )}

            <div className="form-control px-4 py-3">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  onChange={handleToggleTheme}
                  checked={theme === "light" ? false : true}
                  className="toggle"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
