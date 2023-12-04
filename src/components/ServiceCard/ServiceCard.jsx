
const ServiceCard = ({ item }) => {
    const { name, image_url, type, country, description,price } = item;
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
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;