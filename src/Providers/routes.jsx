import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../routes/Home";
import Portfolio from "../routes/Portfolio";
import About from "../routes/About";
import ContactUs from "../routes/ContactUs";
import ServiceDetails from "../routes/ServiceDetails";
import ProjectDetails from "../routes/ProjectDetails";
import BlogDetails from "../routes/BlogDetails";
import Blogs from "../routes/Blogs";
import Services from "../routes/Services";
import Products from "../routes/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: ":id",
            element: <ServiceDetails />,
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: ":id",
            element: <BlogDetails />,
          },
        ],
      },
      {
        path: "project-details/:id",
        element: <ProjectDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);
