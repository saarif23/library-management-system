import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const UpdateBooks = () => {
    const books = useLoaderData();
    const [category, setCategory] = useState();
    // const { data: categories } = category;
    const { _id, book_name, image, author_name, book_category, quantity, rating, short_description } = books;
    const axios = useAxios();
    useEffect(() => {
        axios.get('/category')
            .then(data => {
                setCategory(data.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const handleFromSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const book_name = from.book_name.value || "";
        const author_name = from.author_name.value || "";
        const book_category = from.book_category.value || "";
        const quantity = from.quantity.value || "";
        const rating = from.rating.value || "";
        const image = from.image.value || "";
        const short_description = from.details.value || "";
        const updateBook = { book_name, author_name, book_category, quantity, rating, image, short_description };
        console.log(updateBook)




        // new product send to the server 
        fetch(`http://localhost:5000/books/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    from.reset();
                }

            })
    }
    return (
        <div>
            {/* <Helmet>
            <title>MAOXAL | Update Product</title>
        </Helmet> */}
            <div className=" text-center min-h-screen bg-cover bg-center pb-16 " style={{ backgroundImage: 'url("https://i.ibb.co/hCNJXM2/addproduct-bg.jpg")' }}>
                <div className=" max-w-5xl mx-auto py-8 rounded-md">
                    <div className="max-w-2xl space-y-3 mx-auto">
                        <h3 className="text-3xl font-Roboto text-center text-[#374151] font-extrabold">Update Books</h3>
                        <p className="font-Playfair">Product creation is an excellent time for optimizing your product title, description, and image alt tags for search engines. See our Guide to SEO for advice and tips to get started with SEO in BigCommerce.</p>
                    </div>
                    <form onSubmit={handleFromSubmit} className="px-10 font-Playfair">
                        {/* From row with name and author name */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Book Name</span>
                                </label>
                                <input type="text" name="book_name" defaultValue={book_name} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Author Name</span>
                                </label>
                                <input type="text" name="author_name" defaultValue={author_name} className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Type and quantity */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control w-full lg:w-1/2">

                                <label className="label">
                                    <span className="label-text  text-black">Category</span>
                                </label>

                                <select name="book_category" id="">
                                    {books.map(cat => <option>{cat.book_category}</option>)}
                                </select>

                                <input type="text" name="book_category" defaultValue={book_category} className="input input-bordered w-full" />
                            </div>




                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">quantity</span>
                                </label>
                                <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Rating and Image */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Rating</span>
                                </label>
                                <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Book Cover Image URL</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* From row with details */}
                        <div className="">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text  text-black">Short Description</span>
                                </label>
                                <input type="text" name="details" defaultValue={short_description} className="input input-bordered w-full" />
                            </div>

                        </div>
                        {/* From Submit button */}
                        <div className="">
                            <div className="form-control w-full my-5">
                                <input type="submit" value="Update Book" className="input w-full text-white  bg-lime-600 font-bold " />
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateBooks;
