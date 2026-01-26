import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Loading from "../Components/Loading.jsx";
import useRouteLoading from "../hooks/useRouteLoading.js";

const Layout = () => {
  // Centralized loading state for all route changes
  const isLoading = useRouteLoading(1000); // 500ms minimum loading time

  return (
    <>
      {/* Show loading overlay during route transitions */}
      {isLoading && <Loading />}
      
      {/* Main content */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;