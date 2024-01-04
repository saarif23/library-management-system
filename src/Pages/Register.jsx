import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { signUp, handleUpdateProfile } = useContext(AuthContext)
    const { signUp, handleUpdateProfile } = useAuth();
    const navigate = useNavigate()
    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password)
        if (password.length < 6) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password should be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'ok'
            })

        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?=.*\d).{6,}$/.test(password)) {
            return Swal.fire({
                title: "Error!",
                text: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.",
                icon: "error",
                confirmButtonText: 'ok'
            });
        }
        signUp(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Success!",
                    text: 'Sign Up Successfully',
                    icon: "success",
                });
                handleUpdateProfile(name, photoUrl)
                    .then(() => {
                        Swal.fire({
                            title: "Success!",
                            text: 'Profile Update Successfully',
                            icon: "success",
                        });
                        navigate('/')
                    })

                    .catch((error) => {
                        console.log(error)
                        return Swal.fire({
                            title: 'Error!',
                            text: "update profile failure",
                            icon: 'error',
                            confirmButtonText: 'ok'
                        })
                    })

            })
            .catch(error => {
                console.error(error)
                return Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                });
            })
    }
    return (
        <>
            <Helmet>
                <title>Knowledge Cafe | Register</title>
            </Helmet>
            <div className="px-8 py-3 rounded-md m-10 border border-[#176B87]  max-md:w-full w-1/3 mx-auto">
                <h3 className="text-3xl py-3 font-medium">Create Account </h3>
                <form onSubmit={handleRegisterSubmit}>
                    <div className="form-control mb-2 ">
                        <label className="label font-bold">
                            <span className="label-text"> Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter First and Last Name" className="input input-bordered input-sm hover:input-success" required />
                    </div>
                    <div className="form-control mb-2 ">
                        <label className="label font-bold">
                            <span className="label-text"> Your Photo</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered input-sm hover:input-success" required />
                    </div>
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
                        {/* <input type="password" name="password" placeholder="At least 6 characters" className="input input-bordered input-sm hover:input-success" required /> */}
                    </div>


                    <div className="form-control py-5 ">
                        <input type="submit" value="Sign Up" className="cursor-pointer input input-sm text-black bg-[#176B87]" />
                    </div>


                    <p className="p-1 text-sm py-5 ">By creating an account, you agree to <span className="cursor-pointer text-blue-800 hover:underline">Terms & Conditions of Use</span> and <span className="cursor-pointer text-blue-800 hover:underline">Privacy Notice</span>.</p>
                    <hr />
                    <p className="text-sm"> Already have an account ?
                        <Link to="/login">
                            <span className="text-blue-800 underline "> Sign In</span>
                        </Link>
                    </p>
                    <p className="text-sm"> If you want a mamber of library?
                        <span className="text-blue-800 underline cursor-pointer"> Fill up the from here </span>
                    </p>
                </form>

            </div>

        </>
    );
};

export default Register;