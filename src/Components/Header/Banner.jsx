import sliderImage1 from "../../assets/slider1.jpg";
import sliderImage2 from "../../assets/slider2.jpg";
import sliderImage3 from "../../assets/slider3.jpg";
import sliderImage4 from "../../assets/slider4.jpg";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full lg:h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={sliderImage1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="md:pl-24 lg:w-3/4  md:space-y-5 leading-relaxed">
              <h3 className="md:w-3/5 md:text-5xl max-md:text-4xl font-extrabold leading-tight max-md:text-center max-md:px-">
                <span className="text-orange-400">Reading is a valuable</span>{" "}
                skill for acquiring{" "}
                <span className="text-orange-400">knowledge</span>
              </h3>
              <p className="md:w-2/3 max-md:text-center max-md:hidden">
                {" "}
                Libraries are valuable sources of reliable information. They
                offer reference materials, research assistance, and access to
                academic journals, helping individuals with academic and
                professional research.
              </p>
              <button className="py-2 px-2 mad-md:px-5 rounded-md font-bold bg-[#176B87] text-white max-md:text-sm max-md:px-10 max-md:hidden">
                Learn more...
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={sliderImage4} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="md:pl-24 lg:w-3/4  md:space-y-5 leading-relaxed">
              <h3 className="md:w-3/5 md:text-5xl max-md:text-4xl font-extrabold leading-tight max-md:text-center max-md:px-">
                <span className="text-orange-400">Reading is a valuable</span>{" "}
                skill for acquiring{" "}
                <span className="text-orange-400">knowledge</span>
              </h3>
              <p className="md:w-2/3 max-md:text-center max-md:hidden">
                {" "}
                Libraries are valuable sources of reliable information. They
                offer reference materials, research assistance, and access to
                academic journals, helping individuals with academic and
                professional research.
              </p>
              <button className="py-2 px-2 mad-md:px-5 rounded-md font-bold bg-[#176B87] text-white max-md:text-sm max-md:px-10 max-md:hidden">
                Learn More...
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={sliderImage3} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="md:pl-24 lg:w-3/4  md:space-y-5 leading-relaxed">
              <h3 className="md:w-3/5 md:text-5xl max-md:text-4xl font-extrabold leading-tight max-md:text-center max-md:px-">
                <span className="text-orange-400">Reading is a valuable</span>{" "}
                skill for acquiring{" "}
                <span className="text-orange-400">knowledge</span>
              </h3>
              <p className="md:w-2/3 max-md:text-center max-md:hidden">
                {" "}
                Libraries are valuable sources of reliable information. They
                offer reference materials, research assistance, and access to
                academic journals, helping individuals with academic and
                professional research.
              </p>
              <button className="py-2 px-2 mad-md:px-5 rounded-md font-bold bg-[#176B87] text-white max-md:text-sm max-md:px-10 max-md:hidden">
                Learn More...
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={sliderImage2} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="md:pl-24 lg:w-3/4  md:space-y-5 leading-relaxed">
              <h3 className="md:w-3/5 md:text-5xl max-md:text-4xl font-extrabold leading-tight max-md:text-center max-md:px-">
                <span className="text-orange-400">Reading is a valuable</span>{" "}
                skill for acquiring{" "}
                <span className="text-orange-400">knowledge</span>
              </h3>
              <p className="md:w-2/3 max-md:text-center max-md:hidden">
                {" "}
                Libraries are valuable sources of reliable information. They
                offer reference materials, research assistance, and access to
                academic journals, helping individuals with academic and
                professional research.
              </p>
              <button className="py-2 px-2 mad-md:px-5 rounded-md font-bold bg-[#176B87] text-white max-md:text-sm max-md:px-10 max-md:hidden">
                Learn More...
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
