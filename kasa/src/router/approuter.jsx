import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/logement/:id",
        element: <ProductPage />,
      },
      {
        path: "*", // 404 page
        element: <ErrorPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
