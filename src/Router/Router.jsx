import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Root from "./Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Orders from "../components/Orders/Orders";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Profiles from "../components/Profile/Profiles";
import DashBoard from "../components/Dashboard/DashBoard";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Root></Root>,
        children: [
            {
                path:'/',
                index: true,
                element:<Home></Home>,
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'order',
                element:<PrivateRoutes>
                    <Orders></Orders>
                </PrivateRoutes>
            },
            {
                path:'/profile',
                element:<PrivateRoutes>
                    <Profiles></Profiles>
                </PrivateRoutes>
            },
            {
                path:'/dashboard',
                element: <PrivateRoutes>
                    <DashBoard></DashBoard>
                </PrivateRoutes>
            }
        ]
    }
])