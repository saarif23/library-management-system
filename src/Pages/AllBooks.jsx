import { useLoaderData } from "react-router-dom";
import SingleBooks from "../Components/SingleBooks";


const AllBooks = () => {
    const books = useLoaderData();
    
    return (
        <div className="max-w-6xl mx-auto grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3  gap-10 my-10">
            {
                books?.map(book => <SingleBooks key={book._id} book={book}></SingleBooks>)
            }
        </div>
    );
};

export default AllBooks;