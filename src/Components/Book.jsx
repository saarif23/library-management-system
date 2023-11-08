import { Link } from "react-router-dom";
import { FaEye } from 'react-icons/fa';
import ReactStarsRating from 'react-awesome-stars-rating';
import PropTypes from 'prop-types'
const Book = ({ book }) => {

    const { _id, book_name, image, author_name, book_category, quantity, rating } = book;
    return (
        <div className=" rounded-lg shadow-md md:h-[320px]  border max-lg:mx-5 flex max-md:flex-col md:flex-row gap-3" >
            <img className=" max-md:w--4/5 md:w-2/5 rounded-md " src={image} alt="bookImage" />

            <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                    <div className='space-y-2'>
                        <h3 className="text-3xl font-bold pb-3"> {book_name}</h3>
                        <p>Category : {book_category}</p>
                        <p>Writer Name   : {author_name}</p>
                        <p >Availabe Quantity :  {quantity}</p>

                        <div className="flex gap-3 pb-3"> Rating :
                            <ReactStarsRating className="flex" value={rating} />
                            <p>({rating})</p>
                        </div>
                    </div>
                </div>
                <Link to={`/book/${_id}`}>
                    <div className="flex justify-center items-center gap-5 p-2 rounded-md border w-full">  <FaEye></FaEye> <span>View Details</span></div>
                </Link>
            </div>

        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;