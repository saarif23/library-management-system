

import SingleBorrowBook from "../Components/SingleBorrowBook";
import useBorrowBooks from "../Hooks/useBorrowBooks";

const BorrowedBooks = () => {

    const { isPending, data, refetch } = useBorrowBooks();

    if (isPending) {
        return <p>loding...........</p>
    }
    return (
        <div>
            {
                data.map(book => <SingleBorrowBook key={book._id} book={book} refetch={refetch}></SingleBorrowBook>)
            }
        </div>
    );
};

export default BorrowedBooks;