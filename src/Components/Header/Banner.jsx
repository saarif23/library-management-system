const Banner = () => {
    return (
        <div className="py-10" style={{ backgroundImage: 'url("https://i.ibb.co/mbbzFv7/12188678-4907157.jpg")' }}>
        <div className="flex max-md:flex-col  lg:flex-row justify-center items-center lg:px-24  lg:gap-16" >
            <div className="max-w-md max-lg:text-center space-y-5">
                <h3 className="text-5xl font-Roboto font-extrabold">Up to <span className="text-orange-600"> $500</span> <br /> off <span className="text-orange-600">Surface Pro 9</span></h3>
                <p className="font-Playfair">Laptop power, tablet flexibility—save now on select devices and unwrap possibility all year long. Offer ends 10/29.
                </p>
                <button className="text-white py-2 px-3 font-Roboto bg-orange-600 font-bold rounded-md">Learn More Surface Pro 9</button>
            </div>
            <div className="">
                <img src="https://i.ibb.co/hLsjZz8/banner-removebg-preview.png" alt="" />
            </div>
        </div>
    </div>
    );
};

export default Banner;