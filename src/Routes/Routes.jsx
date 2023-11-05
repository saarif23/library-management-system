import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BookCard from "../Components/BookCard";
import BookDetails from "../Pages/BookDetails";
import UpdateBooks from "../Pages/UpdateBooks";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <AddBooks></AddBooks>
            },
            {
                path: '/updateBooks',
                element: <UpdateBooks></UpdateBooks>
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>,
                loader: ()=>fetch('http://localhost:5000/books')
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>
            },
            {
                path: '/category/:book_category',
                element: <BookCard></BookCard>,
                loader: () => fetch('http://localhost:5000/books')
            },
            {
                path: '/book/:_id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('http://localhost:5000/books'),

            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])
export default Routes;