import ReactStarsRating from "react-awesome-stars-rating";
import PropTypes from "prop-types";
const SingleBook = ({ book }) => {
  const { book_name, image, book_category, rating, author_name } = book;
  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="center-center"
      data-aos-duration="1000"
      className="my-2"
    >
      <div className="flex h-full items-center gap-5 rounded-md border">
        <div className="w-1/3 ">
          <img className="w-full " src={image} alt="Buds" />
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-bold ">{book_name} </h2>
          <p>Author : {author_name}</p>
          <p className="text-teal-500 font-bold">
            {" "}
            Book Category : {book_category}
          </p>
          <div className="flex text-sm items-center gap-3">
            <ReactStarsRating className="flex" value={rating} />
            <p>({rating})</p>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleBook.propTypes = {
  book: PropTypes.object.isRequired,
};
export default SingleBook;
