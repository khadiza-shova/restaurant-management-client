import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleItem from "../Components/SingleItem";
import FoodPurchase from "../Components/FoodPurchase";
import TopFood from "../Components/TopFood";
import AddFoodItem from "../Pages/AddFoodItem";
import MyAddedItem from "../Pages/MyAddedItem";
import MyOrderedFood from "../Pages/MyOrderedFood";
import Blog from "../Pages/Blog";
import NotFoundPage from "../Pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import UpdateItem from "../Components/UpdateItem";

const Routes =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<NotFoundPage></NotFoundPage>,
        children:[
            
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/allFood",
                element:<AllFood></AllFood>,
                loader:()=>fetch("https://restaurant-management-server-gamma.vercel.app/allFood")
            },
            {   
                path:"/topFood",
                element:<TopFood></TopFood>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/singleItem/:id",
                element:<PrivateRoute><SingleItem></SingleItem></PrivateRoute>,
                loader:({params})=>fetch(`https://restaurant-management-server-gamma.vercel.app/singleItem/${params.id}`)
            },
            {
                path:"/foodPurchase",
                element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>
            },
            {
                path:"/addItem",
                element:<AddFoodItem></AddFoodItem>
            },
            {
                path:"/myAddedItem",
                element:<MyAddedItem></MyAddedItem>
            },
            
           {
                path:"/updateItem/:id",
                element:<UpdateItem></UpdateItem>,
                loader:({params})=>fetch(`https://restaurant-management-server-gamma.vercel.app/updateItem/${params.id}`)
                
           },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/OrderedFood",
                element:<MyOrderedFood></MyOrderedFood>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default Routes;