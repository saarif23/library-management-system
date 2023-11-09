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
import PrivateRoute from "./PrivateRoute";
import ReadBooks from "../Pages/ReadBooks";
import ErrorPage from "../Pages/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            },
            {
                path: '/updateBooks/:id',
                element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
                loader: ({ params }) => fetch(`https://library-management-system-server-ivory.vercel.app/books/${params.id}`, { credentials: "include" })
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
                loader: () => fetch('https://library-management-system-server-ivory.vercel.app/books', { credentials: "include" })
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
                loader: () => fetch('https://library-management-system-server-ivory.vercel.app/books', { credentials: "include" }),
            },
            {
                path: '/category/:book_category',
                element: <BookCard></BookCard>,
                loader: () => fetch('https://library-management-system-server-ivory.vercel.app/books', { credentials: "include" })
            },
            {
                path: '/book/:_id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: () => fetch('https://library-management-system-server-ivory.vercel.app/books', { credentials: "include" }),

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
    },
    {
        path: "/readBook/:_id",
        element: <ReadBooks></ReadBooks>,
        loader: ({ params }) => fetch(`https://library-management-system-server-ivory.vercel.app/books/${params._id}`, { credentials: "include" })
    }

])
export default Routes;