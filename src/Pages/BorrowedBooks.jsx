import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import SingleBorrowBook from "../Components/SingleBorrowBook";

const BorrowedBooks = () => {
    const axios = useAxios();
    const [borrowBooks, setBorrowBooks] = useState([]);
    useEffect(() => {
        axios.get('/borrowBooks')
            .then(res => {
                setBorrowBooks(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])
    return (
        <div>
            {
                borrowBooks.map(book=> <SingleBorrowBook key={book._id} book={book}></SingleBorrowBook>)
            }
        </div>
    );
};

export default BorrowedBooks;