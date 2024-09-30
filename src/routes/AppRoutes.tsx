import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes;