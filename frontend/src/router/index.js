
import {
    createBrowserRouter
} from "react-router-dom";
import PageLayout from "../layouts/Layout";
import Landing from "../components/ui/Landing.js";
import SignUp from '../features/auth/SignUp.js';
import Activate from "../features/auth/Activate";
import Login from "../features/auth/LogIn";
import ForgotPassword from "../features/auth/ForgotPassword";
import ResetPassword from "../features/auth/ResetPassword.js";
import Home from "../components/ui/home/Home";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice.js";
import  { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const token = useSelector(selectCurrentToken);
    const location = useLocation()
  
    return token ? element : <Navigate to="/login" state={{ from : location}} replace />;
};

const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <Landing/>
            },
            {
                path: "/home",
                element: <PrivateRoute element={<Home />} />,
            },
            {
                path:"/signup",
                element: <SignUp />,
            },
            {
                path:"/activate/:uid/:token",
                element:<Activate/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path:"/forgot-password",
                element: <ForgotPassword/>
            },
            {
                path: '/password/reset/confirm/:uid/:token',
                element: <ResetPassword />,
            },
        ],
    },
]);

export default router;