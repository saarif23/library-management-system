const Banner = () => {
    return (

        <>
            <div className="carousel w-full lg:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KXn73sW/29739.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <div className='md:pl-24  md:space-y-5 leading-relaxed'>
                            <h3 className="md:w-3/5 md:text-5xl max-md:text-2xl font-extrabold leading-tight max-md:text-center max-md:px-10"><span className="text-orange-400">Reading is a valuable</span>  skill for acquiring <span className="text-orange-400">knowledge</span></h3>
                            <p className='md:w-2/3 max-md:text-center max-md:text-sm'> Libraries are valuable sources of reliable information. They offer reference materials, research assistance, and access to academic journals, helping individuals with academic and professional research.</p>
                            <button className='py-2 px-2 mad-md:px-5 rounded-md font-bold bg-orange-600 text-white max-md:text-sm max-md:px-10 max-md:hidden'>Knowledge is Everything</button>
                        </div>

                    </div>
                    <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Nj3Q8fW/book-library-with-open-textbook.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='md:pl-24  md:space-y-5 leading-relaxed'>
                            <h3 className="md:w-3/5 md:text-5xl max-md:text-2xl font-extrabold leading-tight max-md:text-center max-md:px-10"><span className="text-orange-400">Reading is a valuable</span>  skill for acquiring <span className="text-orange-400">knowledge</span></h3>
                            <p className='md:w-2/3 max-md:text-center max-md:text-sm'> Libraries are valuable sources of reliable information. They offer reference materials, research assistance, and access to academic journals, helping individuals with academic and professional research.</p>
                            <button className='py-2 px-2 mad-md:px-5 rounded-md font-bold bg-orange-600 text-white max-md:text-sm max-md:px-10 max-md:hidden'>Knowledge is Everything</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/4j4cZk3/26989.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='md:pl-24  md:space-y-5 leading-relaxed'>
                            <h3 className="md:w-3/5 md:text-5xl max-md:text-2xl font-extrabold leading-tight max-md:text-center max-md:px-10"><span className="text-orange-400">Reading is a valuable</span>  skill for acquiring <span className="text-orange-400">knowledge</span></h3>
                            <p className='md:w-2/3 max-md:text-center max-md:text-sm'> Libraries are valuable sources of reliable information. They offer reference materials, research assistance, and access to academic journals, helping individuals with academic and professional research.</p>
                            <button className='py-2 px-2 mad-md:px-5 rounded-md font-bold bg-orange-600 text-white max-md:text-sm max-md:px-10 max-md:hidden'>Knowledge is Everything</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6sLc9gF/29660.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='md:pl-24  md:space-y-5 leading-relaxed'>
                            <h3 className="md:w-3/5 md:text-5xl max-md:text-2xl font-extrabold leading-tight max-md:text-center max-md:px-10"><span className="text-orange-400">Reading is a valuable</span>  skill for acquiring <span className="text-orange-400">knowledge</span></h3>
                            <p className='md:w-2/3 max-md:text-center max-md:text-sm'> Libraries are valuable sources of reliable information. They offer reference materials, research assistance, and access to academic journals, helping individuals with academic and professional research.</p>
                            <button className='py-2 px-2 mad-md:px-5 rounded-md font-bold bg-orange-600 text-white max-md:text-sm max-md:px-10 max-md:hidden'>Knowledge is Everything</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </>
        //     <div className="py-10" style={{ backgroundImage: 'url("https://i.ibb.co/Nj3Q8fW/book-library-with-open-textbook.jpg")' }}>
        //     <div className="flex max-md:flex-col  lg:flex-row justify-center items-center lg:px-24  lg:gap-16" >
        //         <div className="max-w-md max-lg:text-center space-y-5">
        //             <h3 className="text-5xl font-Roboto font-extrabold">Up to <span className="text-orange-600"> $500</span> <br /> off <span className="text-orange-600">Surface Pro 9</span></h3>
        //             <p className="font-Playfair">Laptop power, tablet flexibility—save now on select devices and unwrap possibility all year long. Offer ends 10/29.
        //             </p>
        //             <button className="text-white py-2 px-3 font-Roboto bg-orange-600 font-bold rounded-md">Learn More Surface Pro 9</button>
        //         </div>
        //         <div className="">
        //             <img src="https://i.ibb.co/hLsjZz8/banner-removebg-preview.png" alt="" />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;