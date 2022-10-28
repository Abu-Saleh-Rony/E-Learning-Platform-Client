import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import CheckOut from "../../component/CheckOut/CheckOut";
import Contact from "../../component/Contact/Contact";

import Courses from "../../component/Courses/Courses";
import DetailCard from "../../component/DetailCard/DetailCard";

import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Faq from "../../component/Faq/Faq";
import Home from "../../component/Home/Home";

import LoginPage from "../../component/LoginPage/LoginPage";
import Pricing from "../../component/Pricing/Pricing";
import PrivateRoutes from "../../component/PrivateRoutes/PrivateRoutes";

import RegisterPage from "../../component/RegisterPage/RegisterPage";
import UserProfile from "../../component/UserProfile/UserProfile";

import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => {
          fetch("https://server-iota-nine.vercel.app/course-category");
        },
        element: <Courses />,
      },
      {
        path: "/detailPage/:id",
        loader: ({ params }) =>
          fetch(`https://server-iota-nine.vercel.app/courseData/${params.id}`),
        element: <DetailCard />,
      },
      {
        path: "/checkOut/:id",
        loader: ({ params }) =>
          fetch(`https://server-iota-nine.vercel.app/courseData/${params.id}`),
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
      },
      {
        path: "/faq",

        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: '/userProfile', element: <UserProfile />
      }
    ],
  },
]);
