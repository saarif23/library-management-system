import { useLoaderData } from "react-router-dom";
import SingleBooks from "../Components/SingleBooks";
import { useState } from "react";


const AllBooks = () => {
    const books = useLoaderData();
    const [availableBooks, setAvailableBooks] = useState(books);

    const handleFilterBooks = () => {
        const filter = books.filter(book => book.quantity > 0)
        setAvailableBooks(filter);

    }

    return (
        <>
            <div className=" my-10 max-w-6xl mx-auto">
                <span onClick={handleFilterBooks} className="m-5 px-10 py-3 bg-sky-500 text-white font-semibold rounded-md cursor-pointer">Filter Available Books</span>
                <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 my-5 gap-5 lg:gap-10">
                    {
                        availableBooks?.map(book => <SingleBooks key={book._id} book={book}></SingleBooks>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllBooks;