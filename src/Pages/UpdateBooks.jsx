import { useLoaderData } from "react-router-dom";

const UpdateBooks = () => {
    const books = useLoaderData();
    const { _id, book_name, image, author_name, book_category, quantity, rating, short_description } = books;

    // const handleFromSubmit = event => {
    //     event.preventDefault();
    //     const from = event.target;
    //     const name = from.name.value;
    //     const brandName = from.brandName.value;
    //     const type = from.type.value;
    //     const price = from.price.value;
    //     const rating = from.rating.value;
    //     const image = from.image.value;
    //     const details = from.details.value;
    //     const newProduct = { name, brandName, type, price, rating, image, details };

    //     // new product send to the server 
    //     fetch(`https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products/${_id}`, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newProduct)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Product Updated Successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'Cool'
    //             })
    //             from.reset();
    //         })
    // }
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
                    <form className="px-10 font-Playfair">
                        {/* From row with name and Brand name */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={book_name} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Brand Name</span>
                                </label>
                                <input type="text" name="brandName" defaultValue={author_name} className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Type and Price */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Product Type</span>
                                </label>
                                <input type="text" name="type" defaultValue={book_category} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={quantity} className="input input-bordered w-full" />
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
                                    <span className="label-text  text-black">Product Image</span>
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
