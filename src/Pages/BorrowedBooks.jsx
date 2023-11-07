
import SingleBorrowBook from "../Components/SingleBorrowBook";
import useAuth from "../Hooks/useAuth";
import useBorrowBooks from "../Hooks/useBorrowBooks";

const BorrowedBooks = () => {
    const { user } = useAuth();
    const [data, isPending, refetch] = useBorrowBooks();
  
    if (isPending) {
        return <p>loding...........</p>
    }

    const dataWithUser = data.filter(item => item.email === user.email)
    console.log(dataWithUser);


    return (
        <div className="min-h-screen">
            {
                dataWithUser.map(book => <SingleBorrowBook key={book._id} book={book} refetch={refetch}></SingleBorrowBook>)
            }
        </div>
    );
};

export default BorrowedBooks;