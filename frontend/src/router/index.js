//js
import {
    createBrowserRouter
} from "react-router-dom";
import PageLayout from "../layouts/Layout";
import Landing from "../layouts/Landing";
import SignUpView from '../features/auth/signup/SignUpView.js';
import ActivateView from "../features/auth/activate/ActivateView";
// import LoginView from "../features/auth/login/LogInView";
// import ResetPasswordView from "../features/auth/passwordreset/ResetPasswordView";
// import ResetPasswordConfirmView from "../features/auth/passwordreset/ResetPasswordConfirmView";
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
                path:"/signup",
                element: <SignUpView />,
            },
            {
                path:"/activate/:uid/:token",
                element:<ActivateView/>
            }
            // {
            //     path: "/login",
            //     element: <LoginView />
            // },
            // {
            //     path:"/reset-password",
            //     element: <ResetPasswordView/>
            // },
            // {
            //     path:"/password/reset/confirm/:uid/:token",
            //     element: <ResetPasswordConfirmView/>
            // },
        ],
    },
]);

export default router;