import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import ReactStarsRating from 'react-awesome-stars-rating';
import { MdDeleteSweep } from "react-icons/md";
import useAxios from "../Hooks/useAxios";

const SingleBorrowBook = ({ book, refetch }) => {
    const axios = useAxios();
    const { _id, book_name, image, author_name, book_category, rating, returnDate, borrowedDate } = book;

    const handleDeleteToMyCart = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/borrowBooks/${_id}`, {
                })
                    .then(res => {
                        console.log(res.data)
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
                    .catch(error => {
                        console.log(error)

                    })


            }
        })
    }
    return (
        <div className="max-w-4xl mx-auto ">
            <div className='flex max-md:flex-col items-center flex-row max-md:justify-center 
       justify-between max-w-6xl  border rounded-lg max-md:gap-5  my-5 h-[450px]'>
                {/* <Helmet>
                <title>MAOXAL | My Cart</title>
            </Helmet> */}
                <img className=' w-[350px] h-full' src={image} alt="" />

                <div className="">
                    <div className='text-left max-md:text-center max-md:w-full space-y-2 p-10'>
                        <h3 className="text-3xl font-Roboto font-bold pb-8">{book_name}</h3>
                        <p className='font-Playfair'>Category of Book : {book_category}</p>
                        <p className='font-Playfair'>Author Name : {author_name}</p>
                        <p>Borrow Date : {borrowedDate}</p>
                        <p>Return Date :  {returnDate}</p>
                        <div className="flex max-md:justify-center gap-3 pb-10">
                            <ReactStarsRating className="flex" value={rating} />
                            <p>{rating} (15 reviews)</p>
                        </div>
                        <div>
                            <div onClick={() => handleDeleteToMyCart(_id)} className="flex justify-center items-center gap-2 p-2 font-bold text-white rounded-md bg-red-600 cursor-pointer"> <MdDeleteSweep></MdDeleteSweep> <span>Return Book</span></div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};
SingleBorrowBook.propTypes = {
    book: PropTypes.object.isRequired,
    refetch: PropTypes.func

}
export default SingleBorrowBook;

