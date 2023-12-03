
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceItem from "../ServiceItem/ServiceItem";
import useService from "../../../hooks/useService";

const PopularServices = () => {
    //    Using Custom Hook
    const [services] = useService();
    const popularItems = services.filter(item => item.type === 'Mountains');

    // // Setting on State 
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.type === 'Mountains');

    //             setServices(popularItems)
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                heading={"Popular Tour Package"}
                subHeading={"Perfect for You"}
            ></SectionTitle>

            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {
                    popularItems.map(item => <ServiceItem
                        key={item.name}
                        item={item}
                    ></ServiceItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 w-full text-black mt-4">View Full</button>

        </section>
    );
};

export default PopularServices;