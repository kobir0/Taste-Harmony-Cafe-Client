// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddFood from "../Pages/User/AddFood";
import Orders from "../Pages/User/Orders/Orders";
import Myfoods from "../Pages/User/MyFood/Myfoods";
import FoodPurchase from "../Pages/User/FoodPurchase";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateFoodItem from "../Pages/UpdateFoodItem/UpdateFoodItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allfooditems",
        element: <AllFoodItems></AllFoodItems>,
        loader: () =>
          fetch("https://taste-harmony-cafe-server.vercel.app/foodItemsCount"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/user/addedfooditems",
        element: (
          <PrivateRoute>
            <Myfoods></Myfoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/addfood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/FoodOrder/:foodName",
        element: <FoodPurchase></FoodPurchase>,
        loader: ({ params }) =>
          fetch(
            `https://taste-harmony-cafe-server.vercel.app/fooditem/${params.foodName}`
          ),
      },
      {
        path: "/food/:foodName",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taste-harmony-cafe-server.vercel.app/fooditems"),
      },
      {
        path: "updateFoodItem/:name",
        element: (
          <PrivateRoute>
            <UpdateFoodItem></UpdateFoodItem>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
