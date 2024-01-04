import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
// import useAxios from "../../Hooks/useAxios";
import SingleBook from "./SingleBook";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const FamousBooks = () => {
    const [showAll, setShowAll] = useState(true);
    // const axios = useAxios()
    const axiosPublic = useAxiosPublic();
    const [books, setBooks] = useState([]);
    const filterBooks = books.filter(book => book.rating >= 4.90)

    useEffect(() => {
        axiosPublic.get('/books')
            .then(res => {
                setBooks(res.data)
            })
            .catch(error => console.log(error))

    }, [axiosPublic])
    return (
        <div className="max-w-6xl mx-auto my-10">

            <h3 className="text-3xl text-[#176B87] font-bold  pb-5 text-center font-Roboto">Top Ranked Books </h3>
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:mx-5 grid-cols-3 gap-5">
                {
                    (showAll ? filterBooks.slice(0, 3) : filterBooks).map(book => <SingleBook key={book._id}
                        book={book}

                    ></SingleBook>)
                }
            </div>
            <button 
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-delay="50"
            data-aos-duration="1000"

            
            onClick={() => setShowAll(!showAll)} className='flex mx-auto  justify-center items-center gap-3 bg-[#176B87] px-5 py-2 mt-5 rounded-md text-white '>{showAll ? "See More " : "See Less"}<AiOutlineArrowRight></AiOutlineArrowRight> </button>
        </div>

    );
};

export default FamousBooks;