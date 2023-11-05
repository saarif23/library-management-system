import { useLoaderData } from "react-router-dom";
import SingleBooks from "../Components/SingleBooks";


const AllBooks = () => {
    const books = useLoaderData();
    
    return (
        <div className="grid grid-cols-4  gap-5 ">
            {
                books?.map(book => <SingleBooks key={book._id} book={book}></SingleBooks>)
            }
        </div>
    );
};

export default AllBooks;