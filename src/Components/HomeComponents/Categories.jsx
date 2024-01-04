
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Category from "./Category";


const Categories = () => {
    const [category, setCategory] = useState();
    const axios = useAxios();
    useEffect(() => {
        axios.get('/category')
            .then(data => {
                setCategory(data.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [axios])
    return (
        <div className="">
            <div className="text-center  max-w-6xl mx-auto max-md:my-10 md:mt-10">
                <h3
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                className="text-4xl font-bold pb-3 text-[#176B87]">Famous Book Categories</h3>
                <p 
               
                className="max-md:text-sm w-2/3 mx-auto">A library can be called a store–house of knowledge. In dictionaries the word “library” has been defined as “a building or room containing a collection of books”. A library plays a very important role in ...</p>
                <div 
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="150"
                 data-aos-duration="2000"
                
                className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-16 gap-5 lg:grid-cols-4 max-lg:mx-5 my-10">
                    {
                        category?.map(category => <Category key={category._id} category={category}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;