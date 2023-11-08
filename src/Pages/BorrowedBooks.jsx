
import { useLoaderData, useParams } from "react-router-dom";
import SingleBorrowBook from "../Components/SingleBorrowBook";
import useAuth from "../Hooks/useAuth";
import useBorrowBooks from "../Hooks/useBorrowBooks";

const BorrowedBooks = () => {
    const { user } = useAuth();
    const [data, isPending, refetch] = useBorrowBooks();
    const books = useLoaderData();
    const { _id } = useParams();
    
    if (isPending) {
        return <p>loding...........</p>
    }

    const dataWithUser = data.filter(item => item.email === user.email)
    console.log(dataWithUser);


    return (
        <div className="min-h-screen">
             <p>total product : {dataWithUser.length}</p>
            {
                dataWithUser.map(book => <SingleBorrowBook
                    key={book._id}
                    _id={_id}
                    book={book}
                    books={books}
                    refetch={refetch}
                ></SingleBorrowBook>)
            }
        </div>
    );
};

export default BorrowedBooks;