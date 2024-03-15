import { Navigate } from "react-router-dom";
import useStore from "../../store";

const PublicOnlyRoute = ({ Component }) => {
    const { isLoggedIn } = useStore()
    return isLoggedIn ? <Navigate to='/boards' replace /> : <Component />;
}

export default PublicOnlyRoute

//if the user is logged in, we want to push them using navigate, to the board screen (the internal screen)
// if the user is not, we show the component