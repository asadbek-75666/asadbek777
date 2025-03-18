import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import News from "./Pages/News";
import ContactUs from "./Pages/ContactUs";
import App from "./App";
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);
