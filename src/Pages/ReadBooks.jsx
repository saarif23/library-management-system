import { useLoaderData } from "react-router-dom";


const ReadBooks = () => {
    const books = useLoaderData();
    const { book_name, image, author_name, book_category, short_description, book_details } = books;
    const { publisher, published_date, book_content1, book_content2, book_content3 } = book_details;
    // console.log(Object.keys(books).join(","));


    return (
        <div className="bg-sky-50">
            <div className="max-w-6xl mx-auto  py-16">
                <h3 className="text-5xl text-center py-7 font-bold">{book_name}</h3>
                <div className="flex flex-row-reverse gap-8">
                    <div className="flex-[2] space-y-4">

                        <div className="space-y-3 pt-5">
                            <p><span className="text-black font-semibold text-lg">Summary of the Book :</span> {short_description}</p>
                            <p ><span className="text-xl font-semibold">Writer : </span>{author_name}</p>
                            <p><span className="text-xl font-semibold" >Type of Book :</span> {book_category}</p>
                            <p><span className="text-xl font-semibold" >Published :</span> {publisher} ({published_date})</p>

                        </div>


                        <p className="text-2xl font-bold underline text-blue-700 pt-10">Content of Book </p>
                        <p>{book_content1}</p>

                    </div>
                    <div className="flex-[1]">
                        <img className="w-full h-[450px]" src={image} alt="" />
                    </div>
                </div>
                <div className="py-5 space-y-5">
                    <p>{book_content2}</p>
                    <p>{book_content3}</p>
                </div>

            </div>
        </div>
    );
};

export default ReadBooks;