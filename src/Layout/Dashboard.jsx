import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gray-600">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome"> <FaHome /> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"> <FaCalendar /> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart /> My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"> <FaAd />Add a  Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bokings"> <FaList /> Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/book/Mountain"> <FaSearch />Book Trip</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;