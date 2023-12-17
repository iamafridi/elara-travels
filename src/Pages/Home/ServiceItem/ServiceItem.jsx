import { Link } from "react-router-dom";


const ServiceItem = ({ item }) => {
    const { name, image_url, type, country, description } = item;

    return (
        <div>
            <a href="#" className="group relative block bg-black">
                <img
                    alt="Developer"
                    src={image_url}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{type}</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64 ">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                {description}
                            </p>
                            <dl className="mt-6 flex gap-4 sm:gap-6">
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-100">{country}</dt>
                                    <dd className="text-xs text-gray-100">COUNTRY</dd>
                                </div>

                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-100">Contact</dt>
                                    <dd className="text-xs text-gray-100">Price Per Day</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </a>
          <div className="text-center">
          <Link to={`/book/${type}`}>
            <button 
             className="btn btn-outline border-0 border-b-4 mt-4">Book Now</button>
            </Link>
          </div>
        </div>
    );
};

export default ServiceItem;