import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { FaArrowRightLong } from 'react-icons/fa6';
const Category = ({ category }) => {
    const { category_image, book_category } = category;
    return (
        <div className=" font-Playfair shadow-lg border shadow-gray-200 hover:shadow-2xl  rounded-lg ">
            <Link to={`/category/${book_category}`}>
                <h3 className=" text-4xl font-bold py-2">{book_category}</h3>
                <img className=" mx-auto  px-5" src={category_image} alt="" />
                <div className=" flex items-center text-black gap-3 justify-center py-2 bg-[#176B87] text-white" >
                    <span>Show Books</span>
                    <FaArrowRightLong></FaArrowRightLong>
                </div>
            </Link>
        </div>

    );
};
Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category;