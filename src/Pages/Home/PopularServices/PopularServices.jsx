import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceItem from "../../Shared/ServiceItem/ServiceItem";

const PopularServices = () => {
    // Setting on State 
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.type === 'Mountains');

                setServices(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                heading={"Popular Tour Package"}
                subHeading={"Perfect for You"}
            ></SectionTitle>

            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {
                    services.map(item => <ServiceItem
                        key={item.name}
                        item={item}
                    ></ServiceItem>)
                }
            </div>
        </section>
    );
};

export default PopularServices;