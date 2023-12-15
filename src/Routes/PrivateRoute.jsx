
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location);
 

    if (loading) {
        return <div className="flex justify-center  items-center my-52"><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children
    }
    else {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default PrivateRoute;