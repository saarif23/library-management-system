import { Link } from "react-router-dom";
import { FaEye} from 'react-icons/fa';
import ReactStarsRating from 'react-awesome-stars-rating';
import PropTypes from 'prop-types'
const Book = ({ book }) => {

    const { _id, book_name, image, author_name, book_category,quantity, rating } = book;
    return (
        <div className="p-5 rounded-lg shadow-md bg-lime-50 max-lg:mx-5">
            <img className="w-[300px] h-[400px]" src={image} alt="productImage" />
            <hr />
            <div className=" p-3">
                <div className='space-y-2'>
                    <h3 className="text-xl font-bold"> {book_name}</h3>
                    <div className="flex justify-between">
                        <p>{book_category}</p>
                        <p>Brand : {author_name}</p>
                    </div>
                    <p className="text-xl font-bold">{quantity}</p>

                    <div className="flex gap-3">
                        <ReactStarsRating className="flex" value={rating} />
                        <p>{rating} (15 reviews)</p>
                    </div>

                    <div className='flex justify-between '>
                        <Link to={`/book/${_id}`}>

                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaEye></FaEye> <span>View Details</span></div>

                        </Link>

                        {/* <Link to={`/updateProduct/${_id}`}>
                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaPen></FaPen> <span>Update Product</span></div>
                        </Link> */}

                    </div>

                </div>

            </div>
        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;