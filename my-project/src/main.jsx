import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./componants/Home/Home.jsx";
import GiftCard from "./componants/GiftCards/GiftCard";
import Wishlist from "./componants/Wishlist/Wishlist";
import Notifications from "./componants/Notifications/Notifications";
import Settings from "./componants/Settings/Settings";
import Orders from "./componants/Orders/Orders";
import Login from "./componants/Login/Login";
import Cart from "./componants/Cart/Cart";

Home;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/giftcards",
        element: <GiftCard />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
