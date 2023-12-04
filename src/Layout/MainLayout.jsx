import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderandFooter = location.pathname.includes('login') ||location.pathname.includes('register');
    return (
        <div>
            {noHeaderandFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderandFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;