import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


function Layout() {
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

  export default Layout;