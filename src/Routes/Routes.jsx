import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import Book from "../Pages/Book/Book/Book";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/services',
            element: <Services></Services>
        },
        {
          path:'/book/:type',
          element:<Book></Book>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        }
      ]
    },
  ]);