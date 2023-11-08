import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center py-10">
            {/* <Helmet>
                    <title>MAOXAL | Error</title>
                </Helmet> */}
            <div className='text-center'>
                <Link to="/"> <p className='flex items-center gap-2 text-xl cursor-pointer text-amber-600'> <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill> <span>Back to Home</span></p></Link>

                <img src="https://i.ibb.co/mFsZnTQ/8030430-3828537-removebg-preview-1.png" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;