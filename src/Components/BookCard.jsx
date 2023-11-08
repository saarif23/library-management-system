import { useLoaderData, useParams } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
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
                <div className="text-black bg-cover w-full flex justify-center items-center" style={{ backgroundImage: 'url("https://i.ibb.co/xzZfPpV/slider1.jpg")' }}>
                    <div className="text-center space-y-5">
                        <p className="text-5xl font-semibold" >3D Showroom </p>
                        <p>Virtual Experience of Smart Life</p>
                        <button className="bg-black text-white py-2 px-10 rounded-md">More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="text-black bg-cover w-full max-md:pt-10 flex pl-20 md:pl-36 lg:pl-44 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/yn7k6sR/slider22.png")' }}>
                    <div className="text-center space-y-2 md:space-y-4  lg:space-y-5">
                        <p className="max-lg:text-2xl text-5xl font-semibold" >XIAOMI 13T </p>
                        <p>CO-ENGINEERED WITH <span className="bg-red-600 rounded-full  p-3 text-white font-medium">Leica</span></p>
                        <p className=" max-lg:text-2xl text-5xl font-semibold">Masterpiece in sight</p>
                        <button className="bg-black text-white py-2 px-10 rounded-md">More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="text-black bg-cover w-full flex pl-16 lg:pl-24 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/23MjMDg/slider3.jpg")' }}>
                    <div className="text-left max-md:space-y-3 space-y-5">
                        <p className="max-md:text-xl text-3xl font-semibold" >XIAOMI Pad 6  </p>
                        <p className="max-md:text-sm text-xl font-semibold">Built for work, designed for ease</p>
                        <p className="max-md:text-sm max-lg:w-64 font-semibold">WQHD+ clear display 144Hz 7-level variable refresh rate</p>
                        <div className="flex items-center gap-2">
                            <span className="underline font-bold">Learn More</span>
                            <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                        </div>


                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-sm btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-sm btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item max-lg:hidden relative w-full">
                <div className="text-black bg-cover w-full flex justify-end pr-44 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/Qft6GVV/slider4.jpg")' }}>
                    <div className="text-left space-y-5">
                        <p className="text-3xl font-semibold" >XIAOMI 13 Ultra </p>
                        <p>CO-ENGINEERED WITH <span className="bg-red-600 rounded-full  p-3 text-white font-medium">Leica</span></p>
                        <p className=" font-semibold" >A Shot Above </p>
                        <p className="font-semibold" >Quad Camera with leica optical lens </p>
                        <div className="flex items-center gap-2">
                            <span className="underline font-bold">Learn More</span>
                            <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                        </div>

                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
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