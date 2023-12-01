
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    console.log(user, "form private rute");
    const location = useLocation()
    const navigate = useNavigate();
    const [isAdmin, isPending] = useAdmin();
    if (isPending) {
        return <div className="flex justify-center  items-center my-52"><progress className="progress w-56"></progress></div>
    }
    if (loading) {
        return <div className="flex justify-center  items-center my-52"><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children
    }
    return navigate("/login", { state: { from: location } })
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default PrivateRoute;