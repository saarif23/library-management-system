import ReactStarsRating from 'react-awesome-stars-rating';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const SingleBooks = ({ book }) => {
    const { _id, book_name, image, author_name, book_category, quantity, rating } = book;
    return (
        <div
        data-aos="fade-up"
       
        data-aos-delay="100"
        data-aos-duration="2000"
        >
            <div className="border border-[#176B87] rounded-lg max-lg:mx-5  flex flex-col justify-between">
                <img className="w-full h-[400px] rounded-t-lg" src={image} alt="productImage" />
                <hr />
                <div className="p-3">
                    <div className='space-y-2'>
                        <h3 className="text-2xl font-bold"> {book_name}</h3>
                        <p>Category of Book : {book_category}</p>
                        <p>Author Name : {author_name}</p>
                        <p>Availabe Books : {quantity}</p>

                        <div className="flex gap-3 pb-3">
                            <ReactStarsRating className="flex" value={rating} />
                            <p>{rating} (15 reviews)</p>
                        </div>
                    </div>
                </div>
                <Link to={`/updateBooks/${_id}`}>
                    <div className="flex justify-center w-full items-center gap-2 p-2 bg-[#176B87] rounded-b-lg text-white font-semibold">  <FaPen></FaPen> <span>Update Book</span></div>
                </Link>
            </div>
        </div>
    );
};
SingleBooks.propTypes = {
    book: PropTypes.object.isRequired
}


export default SingleBooks;