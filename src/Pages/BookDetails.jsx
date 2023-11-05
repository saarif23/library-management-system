import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { BsBoxArrowUpRight, BsFillCartPlusFill } from 'react-icons/bs';
import { BiFastForward } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { SiIconfinder } from 'react-icons/si';
import ReactStarsRating from 'react-awesome-stars-rating';

// import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { useState } from "react";
const BookDetails = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const { displayName, email } = user;
    const { _id } = useParams();
    const books = useLoaderData();
    const bookDetails = books.find(book => book._id === _id);
    const { book_name, image, author_name, book_category, quantity, rating } = bookDetails;
    const [totalQuantity, setTotalQuantity] = useState(quantity);

    const addWithUser = { displayName, email, book_name, image, book_category, rating }
    console.log(addWithUser)


    const handleAddToBorrow = () => {

        axios.post('/borrowBooks', addWithUser)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    title: "Success!",
                    text: 'Book Add to Borrowed Book',
                    icon: "success",
                });
                setTotalQuantity(totalQuantity - 1)

            })
            .catch(error => {
                console.log(error)
            })

    }



    const modal = <>

        <button onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow Now</button>

        <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-black text-center">
                <h3 className="font-bold text-lg">Book Return Date </h3>
                <p className="py-4">10-11-2023</p>
                <div className="modal-action flex justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleAddToBorrow} className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>


    return (
        <>
            <div className="max-w-6xl mx-auto my-10">
                {/* <Helmet>
                <title>MAOXAL | Product Details</title>
            </Helmet> */}
                <div className=" p-5 lg:flex justify-between bg-gray-100 rounded-lg shadow-xl ">
                    <h3 className="max-md:text-2xl text-4xl flex-1  font-medium">{book_name} </h3>
                    <div className="flex justify-between items-center gap-10">
                        <p className="max-md:text-2xl font-semibold text-3xl">${totalQuantity} </p>
                        {
                            totalQuantity <= 0 ? <div  className="flex justify-center items-center gap-2 p-2 text-white rounded-md bg-red-800 hover:bg-red-700 border cursor-pointer btn btn-sm btn-disabled"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div> : <div className="flex justify-center items-center gap-2 p-2 text-white rounded-md bg-red-800 hover:bg-red-700 border cursor-pointer"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div>
                        }

                    </div>

                </div>

                <div className="flex py-10 max-lg:flex-col lg:flex-row items-center gap-5  ">

                    <div className="flex-1 mx-5">
                        <img src={image} alt="" />
                        <p className="pt-10">{''}</p>
                    </div>
                    <div className="flex-1">
                        <div className=" mx-5 space-y-5 ">
                            <h3 className="text-4xl font-Roboto  font-medium">{book_name} </h3>
                            <p> <span className="font-bold">Brand : </span>{author_name}</p>
                            <p> <span className="font-bold">Type : </span>{book_category}</p>
                            <div className="flex gap-5">
                                <ReactStarsRating className="flex" value={rating} />
                                <div className="flex gap-3">
                                    <p>{rating} (6)</p>
                                    <p className="text-red-700 cursor-pointer  hover:underline">Write a review</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <p className=" font-semibold text-3xl">${totalQuantity} </p>
                                <div className="border-l-2 pl-5">
                                    <p>4 interest-free payments of $87.49 with</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="font-extrabold">Booking</p>
                                        <BsBoxArrowUpRight></BsBoxArrowUpRight>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 py-5">
                                <span className="text-4xl"><BiFastForward></BiFastForward></span>
                                <p><span className="text-green-500 font-semibold">In Stock </span>Free Shipping & Free 30-day Returns</p>
                            </div>
                            <div className="flex gap-20">
                               {
                                totalQuantity <= 0 ?  <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer btn btn-md btn-disabled"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div> :  <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div>
                               }

                                <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer"> <MdFavorite></MdFavorite> <span>Read This</span></div>
                            </div>
                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer"> <SiIconfinder></SiIconfinder> <span>FIND A RETAILER</span></div>

                        </div>

                    </div>

                </div>
                <h3 className="text-3xl font-medium py-5">Features and Specs</h3>
                <hr />
                <ul className="menu menu-vertical lg:menu-horizontal">
                    <li><Link >Performance</Link></li>
                    <li><Link>Design</Link></li>
                    <li><Link>Details</Link></li>
                    <li><Link>All Specs</Link></li>

                </ul>
            </div>

        </>
    );
};

export default BookDetails;