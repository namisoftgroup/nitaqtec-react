import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import About from "../routes/About";
import BlogDetails from "../routes/BlogDetails";
import Blogs from "../routes/Blogs";
import ContactUs from "../routes/ContactUs";
import Home from "../routes/Home";
import Portfolio from "../routes/Portfolio";
import Products from "../routes/Products";
import ProjectDetails from "../routes/ProjectDetails";
import ServiceDetails from "../routes/ServiceDetails";
import Services from "../routes/Services";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "portfolio", element: <Portfolio /> },
        {
          path: "services",
          children: [
            { index: true, element: <Services /> },
            { path: ":id", element: <ServiceDetails /> },
          ],
        },
        { path: "products", element: <Products /> },
        {
          path: "blogs",
          children: [
            { index: true, element: <Blogs /> },
            { path: ":id", element: <BlogDetails /> },
          ],
        },
        { path: "project-details/:id", element: <ProjectDetails /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactUs /> },
      ],
    },
  ],
  // {
  //   basename: "/nitaqtec-react-build",
  // }
);

