import { Navigate } from "react-router-dom";
import useStore from "../../store";

const PrivateRoute = ({ Component }) => {
    const { isLoggedIn } = useStore()
    return !isLoggedIn ? <Navigate to='/boards' replace /> : <Component />;
}

export default PrivateRoute

//only the authenticated user can see the component, if it's not, will navigate to the root of the application