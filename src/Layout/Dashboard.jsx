import { FaAd, FaEnvelope, FaHistory, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { IoMdAddCircle } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            {/* Dashboard Side Bar */}
            <div className="w-64 min-h-screen text-gray-50 bg-gray-600">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            {/* If admin  */}
                            <li>
                                <NavLink to="/dashboard/adminHome"> <FaHome /> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"> <IoMdAddCircle /> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"> <FaList /> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart"> <FaAd />Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"> <FaUsers /> All Users</NavLink>
                            </li>
                            {/* Shared NavLinks  */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/"> <FaHome /> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/book/Mountain"> <FaSearch />Book Trip</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact"> <FaEnvelope /> Contact</NavLink>
                            </li></>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome"> <FaHome /> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory"> <FaHistory /> Payment History</NavLink>
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
                                {/* Shared NavLinks  */}
                                <div className="divider"></div>
                                <li>
                                    <NavLink to="/"> <FaHome /> Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/book/Mountain"> <FaSearch />Book Trip</NavLink>
                                </li>
                                <li>
                                    <NavLink to="contact"> <FaEnvelope /> Contact</NavLink>
                                </li></>
                    }
                    
                </ul>
                <div className="m-2 p-2 mt-20">
                        <img src="https://i.ibb.co/T1pt0NY/loginb-removebg-preview.png" className=" h-[25vh]"  alt="" />
                   <button className="btn btn-md w-full">Invite a friend</button>
                    </div>
            </div>

            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;