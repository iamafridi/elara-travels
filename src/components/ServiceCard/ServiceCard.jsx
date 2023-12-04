// BOOK NOW SERVICE CARD

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const ServiceCard = ({ item }) => {
    const { name, image_url, type, country, description, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddtoCart = () => {
        // console.log(trip);
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, image_url, price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Congratulation",
                            text: `Trip to ${name} Package Booked Successfully`,
                            icon: "success"
                        });
                        //  Refetch the Cart
                        refetch();
                    }
                })

        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please Login To Book Trip",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-80" src={image_url} alt="Travel Images" /></figure>
                <p className="absolute right-0 bg-gray-500 text-red-50  p-4 text-xs font-semibold px-6 rounded-es-full border-white border rounded-se-full mt-2">Price Range: {price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{type}</div>
                        <div className="badge badge-outline">{country}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleAddtoCart}
                            className="btn btn-outline border-0 border-b-4 mt-4">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;