import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";

import Footer from "../Components/Footer";
import Navbar from "../Components/Header/Navbar";
import useAxios from "../Hooks/useAxios";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const axios = useAxios();
    const navigate = useNavigate();
    const location = useLocation();

    //login with google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Success!",
                    text: 'Sign In Successfully',
                    icon: "success",
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }

    //login with email and password 
    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)

                const user = { email }
                axios.post('/jwt', user)
                    .then(res => {
                        if (res.data.success) {
                            navigate(location?.state ? location.state : "/")
                        }
                        Swal.fire({
                            title: "Success!",
                            text: 'Sign In Successfully',
                            icon: "success",
                        });
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "Error",
                });
            })
    }
    return (
        <>

            <Navbar></Navbar>
            <div className="px-8 py-3 rounded-md m-10 border  max-md:w-full max-md:mx-5 w-1/3 mx-auto">
                <h3 className="text-3xl py-3 font-semibold">Sign In </h3>
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-control mb-2 ">
                        <label className="label font-bold">
                            <span className="label-text"> Email or Mobile Phone Number</span>
                        </label>
                        <input type="email" name="email" placeholder="abcd123@gmail.com" className="input input-bordered input-sm hover:input-success" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold"> Enter Your Password</span>
                        </label>
                        <div className="flex  relative items-center">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered input-sm hover:input-success w-full" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                        {/* <input type="password" name="password" placeholder="Enter password" className="input input-bordered input-sm hover:input-success" required /> */}
                    </div>
                    <p className="p-1 text-sm py-5 ">By continuing, you agree to <span className="cursor-pointer text-blue-800 hover:underline">Terms & Conditions of Use</span> and <span className="cursor-pointer text-blue-800 hover:underline">Privacy Notice</span>.</p>

                    <div className="form-control pb-3 ">
                        <input type="submit" value="Sign In" className="cursor-pointer input input-sm bg-yellow-400" />
                    </div>
                    <div className="form-control py-3 ">
                        <input onClick={handleGoogleSignIn} type="button" value="Sign In With Google" className="cursor-pointer input input-sm input-bordered" />
                    </div>
                    <p className="text-center">New to ame ?
                        <Link to="/register">
                            <span className="text-blue-800 underline ">  create an account</span>
                        </Link>
                    </p>

                </form>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Login;