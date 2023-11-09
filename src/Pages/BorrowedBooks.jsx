
import { useLoaderData, useParams } from "react-router-dom";
import SingleBorrowBook from "../Components/SingleBorrowBook";

import useBorrowBooks from "../Hooks/useBorrowBooks";
import { Helmet } from "react-helmet";

const BorrowedBooks = () => {

    const [data, isPending, refetch] = useBorrowBooks();
    console.log(data);
    const books = useLoaderData();
    const { _id } = useParams();

    if (isPending) {
        return <p>loding...........</p>
    }

    // const dataWithUser = data.filter(item => item.email === user.email)
    // console.log(dataWithUser);


    return (
        <div className="min-h-screen my-10">
              <Helmet>
                <title>Knowledge Cafe | Borrow Books</title>
            </Helmet>
            {
                data.map(book => <SingleBorrowBook
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