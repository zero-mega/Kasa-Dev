import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/main.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./App";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

const Layout = () => {
  return (
    <>
       <div className="content">
       <Header />
        <main>
          <Outlet /> {}
        </main>
       </div>
       <Footer />
      </>
  );
}

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
        path: "*", 
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
