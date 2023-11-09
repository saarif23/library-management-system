import { useLoaderData, useParams } from "react-router-dom";

import Book from "./Book";

const BookCard = () => {
    const { book_category } = useParams()
    const books = useLoaderData();
    const booksCategory = books.filter(item => item.book_category === book_category);
    // console.log(booksCategory)

    return (
        <>
        {/* <Helmet>
            <title>MAOXAL | Product Card</title>
        </Helmet> */}
        <div className="carousel w-full lg:h-screen md:h-[400px] h-[300px] ">
            <div id="slide1" className="carousel-item relative w-full bg-slate-300" >
                <div className="text-black bg-cover w-full flex justify-center items-center" style={{ backgroundImage: 'url("https://i.ibb.co/Nj3Q8fW/book-library-with-open-textbook.jpg")' }}>
                    <div className="text-center space-y-5">
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="text-black bg-cover w-full max-md:pt-10 flex pl-20 md:pl-36 lg:pl-44 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/4j4cZk3/26989.jpg")' }}>
                    <div className="text-center space-y-2 md:space-y-4  lg:space-y-5">
                        <p className="max-lg:text-2xl text-5xl font-semibold" ></p>
                        <p>CO-ENGINEERED WITH <span className=" rounded-full  p-3 text-white font-medium"></span></p>
                        <p className=" max-lg:text-2xl text-5xl font-semibold"></p>
                        <button className="bg-black text-white py-2 px-10 rounded-md"></button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        
        </div>
        {
            booksCategory.length > 0
                ?
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-10">
                    {
                        booksCategory.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div>
                : <div className="flex justify-center items-center">
                    <div>
                        <img className="mx-auto" src="https://i.ibb.co/2yy85qR/images-4.png" alt="" />
                        <div className="space-y-10 text-center py-10">
                            <h3 className="max-md:text-3xl text-5xl text-center font-bold text-lime-800">Visit other categories. <br /> This categories no product available now</h3>
                            <progress className="progress w-56"></progress>
                        </div>
                    </div>
                </div>
        }
    </>
    );
};

export default BookCard;