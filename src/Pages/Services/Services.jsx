import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import serviceImg from '../../assets/Destinations/destination1.jpg'
import safariImg from '../../assets/Destinations/destination2.jpg'
import Islandimg from '../../assets/Destinations/destination3.jpg'
import NaturalPhenomenonImg from '../../assets/Destinations/destination4.jpg'
import BeachImg from '../../assets/Destinations/destination5.jpg'
import CityImg from '../../assets/Destinations/destination6.png'
import useService from '../../hooks/useService';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceCategory from './ServiceCategory/ServiceCategory';

const Services = () => {

    const [services] = useService();
    // const popularItems = services.filter(item => item.type === 'Mountains');
    const Camping = services.filter(item => item.type === 'Camping');
    const River = services.filter(item => item.type === 'River');
    const Beach = services.filter(item => item.type === 'Beach');
    const Safari = services.filter(item => item.type === 'Safari');
    const City = services.filter(item => item.type === 'City');
    const Historical = services.filter(item => item.type === 'Historical');
    const Island = services.filter(item => item.type === 'Island');
    const Cruise = services.filter(item => item.type === 'Cruise');
    const Winery = services.filter(item => item.type === 'Winery');
    const NaturalPhenomenon = services.filter(item => item.type === 'Natural Phenomenon');

    return (
        <div>
            <Helmet>
                <title>Travels | Service</title>
            </Helmet>
            <Cover img={serviceImg} title={"Our Services"} ></Cover>
            {/* Main Cover  */}
            <SectionTitle subHeading={"Explore Pristine Camping Havens!"} heading={"Uncover the Ultimate Camping Escapes!"}></SectionTitle>
            {/* Camping Service Items */}
            <ServiceCategory items={River}></ServiceCategory>
            {/*safari */}
            <ServiceCategory
                items={Safari}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={safariImg}
            ></ServiceCategory>
            {/*Historical */}
            <ServiceCategory
                items={Historical}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={NaturalPhenomenonImg}
            ></ServiceCategory>
            {/*Island */}
            <ServiceCategory
                items={Island}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={Islandimg}
            ></ServiceCategory>
            {/*WInary */}
            <ServiceCategory
                items={Winery}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={Islandimg}
            ></ServiceCategory>
            
            {/*Camping */}
            <ServiceCategory
                items={Camping}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={CityImg}
            ></ServiceCategory>

            {/*Beach */}
            <ServiceCategory
                items={Beach}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={BeachImg}
            ></ServiceCategory>
            {/*Natural Phenomena */}
            <ServiceCategory
                items={NaturalPhenomenon}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={NaturalPhenomenonImg}
            ></ServiceCategory>
            {/*Cruise Phenomena */}
            <ServiceCategory
                items={Cruise}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={NaturalPhenomenonImg}
            ></ServiceCategory>
            {/*City Phenomena */}
            <ServiceCategory
                items={City}
                title={"Embark on Wild Safaris: Unveiling Nature's Majesty"}
                img={CityImg}
            ></ServiceCategory>

        </div>
    );
};

export default Services;