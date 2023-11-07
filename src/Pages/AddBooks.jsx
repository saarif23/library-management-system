import { Link } from "react-router-dom";

const AddBooks = () => {

    const handleFromSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const brandName = from.brandName.value;
        const type = from.type.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const image = from.image.value;
        const details = from.details.value;
        const newProduct = { name, brandName, type, price, rating, image, details };
        console.log(newProduct);

        // new product send to the server 
        // fetch('https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'New Product Added Successfully',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //         })
        //         from.reset();
        //     })

    }
    return (
        <div className=" text-center min-h-screen bg-cover bg-center pb-16 " style={{ backgroundImage: 'url("")' }}>

        <Link to="/"><button className="p-5 flex font-Playfair items-center mx-auto hover:text-sky-700 hover:underline">Back To Home</button></Link>
        <div className="max-w-5xl mx-auto py-8 rounded-md">
            <div className="max-w-2xl space-y-3 mx-auto">
                <h3 className="text-3xl text-center font-Roboto  font-extrabold">Add New Books</h3>
                <p className="font-Playfair">Ignorant people you get to know them by the way they speak, behave, and live – they are disorganised. The difference between ignorant people and knowledgeable people – ignorant people are foolish knowledgeable people are wise. Foolishness is not sold anywhere; it is a fatal disease acquired by persons who refuse to learn. Wisdom is not sold anywhere; it is a reward for persons who are hungry for knowledge</p>
            </div>
            <form onSubmit={handleFromSubmit} className="px-10 font-Playfair">
                {/* From row with name and Brand name */}
                <div className="flex max-md:flex-col flex-row gap-5">
                    <div className="form-control max-md:w-full w-1/2">
                        <label className="label">
                            <span className="label-text ">Book Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Enter Book Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control max-md:w-full w-1/2">
                        <label className="label">
                            <span className="label-text ">Author Name</span>
                        </label>
                        <input type="text" name="brandName" required placeholder="Enter Author Name " className="input input-bordered w-full" />
                    </div>
                </div>
                {/* From row with Type and Price */}
                <div className="flex max-md:flex-col flex-row gap-5">
                    <div className="form-control max-md:w-full w-1/2">
                        <label className="label">
                            <span className="label-text ">Book Category</span>
                        </label>
                        <input type="text" name="type" required placeholder="Enter Category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control max-md:w-full w-1/2">
                        <label className="label">
                            <span className="label-text ">Quantity</span>
                        </label>
                        <input type="text" name="price" required placeholder="Enter Available Quantity " className="input input-bordered w-full" />
                    </div>
                </div>
                {/* From row with Rating and Image */}
                <div className="flex max-md:flex-col flex-row gap-5">
                    <div className="form-control max-md:w-full w-1/2">
                        <label className="label">
                            <span className="label-text ">Rating</span>
                        </label>
                        <input type="text" name="rating" required placeholder="Rating" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control max-md:w-full w-1/2">
                        <label className="label">
                            <span className="label-text ">Book Image</span>
                        </label>
                        <input type="text" name="image" required placeholder="Enter image URL" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* From row with details */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Short Description</span>
                        </label>
                        <input type="text" name="details" required placeholder="Enter Short Description" className="input input-bordered w-full" />
                    </div>

                </div>
                {/* From Submit button */}
                <div className="">
                    <div className="form-control w-full my-5">
                        <input type="submit" value="Add Book" placeholder="Enter Category" className="input  bg-orange-100 font-bold w-full " />
                    </div>

                </div>

            </form>
        </div>

    </div>
    );
};

export default AddBooks;