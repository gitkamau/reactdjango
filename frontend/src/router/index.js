//js
import {
    createBrowserRouter
} from "react-router-dom";
import PageLayout from "../layouts/Layout";
import Landing from "../layouts/Landing";
import LogInUI from "../components/ui/auth/LogInUI";
import ResetPasswordUI from "../components/ui/auth/ResetPasswordUI";
import ResetPasswordConfirmUI from "../components/ui/auth/ResetPasswordConfirmUI";
import SignUpUI from "../components/ui/auth/SignUpUI";
import ActivateUI from "../components/ui/auth/ActivateUI";
import Home from "../components/ui/home/Home";


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
                element: <Home/>
            },
            {
                path: "/login",
                element: <LogInUI />
            },
            {
                path:"/reset-password",
                element: <ResetPasswordUI/>
            },
            {
                path:"/password/reset/confirm/:uid/:token",
                element: <ResetPasswordConfirmUI/>
            },
            {
                path:"/signup",
                element:<SignUpUI/>
            },
            {
                path:"/activate/:uid/:token",
                element:<ActivateUI/>
            }
        ],
    },
]);

export default router;