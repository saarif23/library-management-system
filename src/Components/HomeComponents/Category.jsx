import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Category = ({ category }) => {
    const { category_image, book_category } = category;
    return (
        <div className="w-[150px] h-[150px] font-Playfair">
            <Link to={`/category/${book_category}`}>
                <img className="w-full h-full rounded-full bg-sky-200 mx-auto p-10" src={category_image} alt="" />
                <h3 className=" text-2xl font-bold py-2">{book_category}</h3>
            </Link>
        </div>

    );
};
Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category;