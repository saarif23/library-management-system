import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import ReactStarsRating from 'react-awesome-stars-rating';
import { MdDeleteSweep } from "react-icons/md";
import useAxios from "../Hooks/useAxios";

const SingleBorrowBook = ({ book }) => {
    const axios = useAxios();
    const { _id, book_name, image, author_name, book_category, quantity, rating } = book;

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
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            // const remaining = myCartProduct.filter(item => item._id !== _id)
                            // setMyCartProduct(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error)
                      
                    })


            }
        })
    }
    return (
        <div className='flex max-md:flex-col items-center flex-row max-md:justify-center 
        justify-between max-w-4xl bg-gray-50 mx-auto border rounded-lg max-md:gap-5  my-5  p-5'>
            {/* <Helmet>
                <title>MAOXAL | My Cart</title>
            </Helmet> */}
            <img className='w-36 mx-auto' src={image} alt="" />


            <div className='text-left max-md:text-center max-md:w-full w-80 space-y-2'>
                <h3 className="text-2xl font-Roboto font-bold">{book_name}</h3>
                <p className='font-Playfair'>Brand Name : {book_category}</p>
                <p className='font-Playfair'>Brand Name : {author_name}</p>
                <p className='font-Playfair'>Price : ${quantity}</p>
                <div className="flex max-md:justify-center gap-3">
                    <ReactStarsRating className="flex" value={rating} />
                    <p>{rating} (15 reviews)</p>
                </div>
            </div>
            <div>
                <div onClick={() => handleDeleteToMyCart(_id)} className="flex justify-center items-center gap-2 p-2 font-medium text-xl rounded-md bg-slate-200 text-red-600 hover:bg-red-600 hover:text-white border cursor-pointer"> <MdDeleteSweep></MdDeleteSweep> <span>Return Book</span></div>
            </div>
        </div>
    );
};
SingleBorrowBook.propTypes = {
    book: PropTypes.object.isRequired,

}
export default SingleBorrowBook;

