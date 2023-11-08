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
import useBorrowBooks from "../Hooks/useBorrowBooks";
const BookDetails = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const { displayName, email } = user;
    const { _id } = useParams();
    console.log(_id);
    const books = useLoaderData();
    const [data, isPending, refetch] = useBorrowBooks();

    //
    const bookDetails = books.find(book => book._id === _id);

    const { book_name, short_description, image, author_name, book_category, quantity, rating, book_details } = bookDetails;
    const { publisher, published_date, book_content1, book_content2, book_content3 } = book_details;
    const [totalQuantity, setTotalQuantity] = useState(quantity);
    const [borrowedDate, setBorrowedDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const restQuantity = totalQuantity - 1;
    console.log(restQuantity);

    const addWithUser = { displayName, _id, email, book_name, restQuantity, author_name, image, book_category, rating, borrowedDate, returnDate }

    if (isPending) {
        return <p>loding ...........</p>
    }



    const handleAddToBorrow = () => {
        if (data.filter(singleData => singleData.email === user.email && singleData.book_name === book_name).length > 0) {
            return Swal.fire({
                title: "error!",
                text: 'Already Borrow this book take another one',
                icon: "error",
            });
        }
        axios.post('/borrowBooks', addWithUser)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: 'Book Add to Borrowed Book',
                        icon: "success",
                    });
                    setTotalQuantity(totalQuantity - 1)
                    refetch()
                }
            })
            .catch(error => {
                console.log(error)
            })

        axios.put(`/books/${_id}`, { totalQuantity: totalQuantity - 1 })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    const modal = <>

        <button onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow Now</button>

        <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-black text-center">
                <div className="flex gap-5 items-center mb-5">

                    <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                            <span className="label-text  text-black">Borrow Date </span>
                        </label>
                        <input onChange={(e) => setBorrowedDate(e.target.value)} type="date" name="borrowedDate" required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                            <span className="label-text  text-black">Return Date </span>
                        </label>
                        <input onChange={(e) => setReturnDate(e.target.value)} type="date" name="returnDate" required className="input input-bordered w-full" />
                    </div>
                    {/* <p className="text-xl font-semibold">Borrow Date :</p>
                    <input className="w-full input-bordered"
                        type="date"
                        name="borrowedDate"
                        value={borrowedDate}
                        onChange={(e) => setBorrowedDate(e.target.value)}
                    /> */}
                </div>
                {/* <div className="flex gap-5 items-center ">
                    <p className="text-xl font-semibold">Return Date :</p>
                    <input
                        type="date"
                        name="returnDate"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />

                </div> */}
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

                        {
                            totalQuantity <= 0 ? <div className="flex justify-center items-center gap-2 p-2 text-white rounded-md bg-red-800 hover:bg-red-700 border cursor-pointer btn btn-sm btn-disabled"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div> : <div className="flex justify-center items-center gap-2 p-2 text-white rounded-md bg-red-800 hover:bg-red-700 border cursor-pointer"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div>
                        }

                    </div>

                </div>

                <div className="flex py-10 max-lg:flex-col lg:flex-row items-center gap-5  ">

                    <div className="flex-1 mx-5">
                        <img className="w-full" src={image} alt="" />
                        <p className="pt-10">{''}</p>
                    </div>
                    <div className="flex-1">
                        <div className=" mx-5 space-y-5 ">
                            <h3 className="text-5xl font-Roboto  font-medium">{book_name} </h3>
                            <p> <span className="font-bold">Author Name : </span>{author_name}</p>
                            <p> <span className="font-bold">Book Type : </span>{book_category}</p>
                            <p> <span className="font-bold">Published Date : </span>{published_date}</p>
                            <p> <span className="font-bold">Published : </span>{publisher}</p>
                            <div className="flex gap-5">
                                <ReactStarsRating className="flex" value={rating} />
                                <div className="flex gap-3">
                                    <p>{rating} (6)</p>
                                    <p className="text-red-700 cursor-pointer  hover:underline">Write a review</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <p className=" font-semibold text-3xl">{totalQuantity} </p>
                                <div className="border-l-2 pl-5">
                                    <p>4 interest-free payments of $87.49 with</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="font-extrabold">Booking</p>
                                        <BsBoxArrowUpRight></BsBoxArrowUpRight>
                                    </div>
                                </div>
                            </div>
                            <p>{short_description}</p>
                            <div className="flex items-center gap-8 py-5">
                                <span className="text-4xl"><BiFastForward></BiFastForward></span>
                                <p><span className="text-green-500 font-semibold">Available </span>The Book is available For you</p>
                            </div>
                            <div className="flex gap-20">
                                {
                                    totalQuantity <= 0 ? <div className="flex justify-center items-center gap-2 p-2 rounded-md border cursor-pointer btn btn-md btn-disabled"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div> : <div className="flex justify-center items-center gap-2 p-2 rounded-md border cursor-pointer"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>{modal}</span></div>
                                }

                                <Link to={`/readBook/${_id}`}> <div className="flex justify-center items-center gap-2 py-2 px-5 rounded-md border cursor-pointer"> <MdFavorite></MdFavorite> <span>Read This Book</span></div></Link>
                            </div>
                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer"> <SiIconfinder></SiIconfinder> <span>FIND A RETAILER</span></div>

                        </div>

                    </div>

                </div>
                <div className=" space-y-5">
                    <p>{book_content1}</p>
                    <p>{book_content2}</p>
                    <p>{book_content3}</p>

                </div>
            </div>

        </>
    );
};

export default BookDetails;