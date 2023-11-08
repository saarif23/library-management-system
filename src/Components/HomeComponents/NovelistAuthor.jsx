import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const NovelistAuthor = () => {
    return (
        <div className=" py-10">
            <div className=' max-w-6xl mx-auto max-lg:px-5'>
                <div className="flex max-md:flex-col flex-row justify-between max-md:gap-5 ">
                    <h3 className="text-4xl font-bold text-centerfont-bold max-md:text-center">World Famous <span className=' text-orange-600 '>Novelist Author</span></h3>
                    <span className='flex cursor-pointer justify-center items-center gap-3 bg-sky-400 px-5 py-2 rounded-md text-white '>View More <AiOutlineArrowRight></AiOutlineArrowRight> </span>
                </div>
               
                <div className='grid font-Playfair grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10'>
                    <div className="p-5 rounded-lg border">
                        <img className=" rounded-full w-[200px] h-[200px] mx-auto mb-5 " src="https://i.ibb.co/VtCx2bS/download.jpg" alt="productImage" />
                        <hr />
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold'>Charles Dickens</h3>
                            <p>A prolific English novelist known for classics like A Tale of Two Cities, Oliver Twist and Great Expectations.</p>
                           <span className='flex justify-center pt-5 text-orange-600 text-3xl cursor-pointer'> <BsArrowRight></BsArrowRight></span>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg border">
                        <img className=" rounded-full  w-[200px] h-[200px]  mx-auto mb-5 " src="https://i.ibb.co/9992yNB/jane.jpg" alt="author" />
                        <hr />
                        <div className='text-center '>
                            <h3 className='text-2xl font-bold'>Jane Austen</h3>
                            <p> An English novelist celebrated for her works, including Pride and Prejudice and Sense and Sensibility.</p>
                            <span className='flex justify-center pt-5 text-orange-600 text-3xl cursor-pointer'> <BsArrowRight></BsArrowRight></span>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg border">
                        <img className=" rounded-full w-[200px] h-[200px] mx-auto mb-5 " src="https://i.ibb.co/GsTjM4N/Shakespeare.jpg" alt="author" />
                        <hr />
                        <div className='text-center '>
                            <h3 className='text-xl font-bold'>William Shakespeare</h3>
                            <p> Often referred to as the greatest playwright and poet in the English language, known for works like Romeo....</p>
                            <span className='flex justify-center pt-5 text-orange-600 text-3xl cursor-pointer'> <BsArrowRight></BsArrowRight></span>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg border">
                        <img className=" rounded-full  w-[200px] h-[200px]  mx-auto mb-5 " src="https://i.ibb.co/xJfX6ys/Tolstoy.jpg" alt="author" />
                        <hr />
                        <div className='text-center '>
                            <h3 className='text-2xl font-bold'>Leo Tolstoy </h3>
                            <p>  The Russian author of epic novels such as War and Peace and Anna Karenina.</p>
                            <span className='flex justify-center pt-5 text-orange-600 text-3xl cursor-pointer'> <BsArrowRight></BsArrowRight></span>
                        </div>
                    </div>
            


                </div>




            </div>


        </div>
    );
};

export default NovelistAuthor;