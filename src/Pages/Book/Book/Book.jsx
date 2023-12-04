import { useState } from 'react';
import orderCoverImg from '../../../assets/Booking/booking4.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useService from '../../../hooks/useService';
// import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import BookTab from '../BookTab/BookTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Book = () => {
     const types = ['Mountain', 'Camping', 'Cruise', 'City', 'River', 'Historical',
          'Natural Phenomena', 'Beach'];

     const { type } = useParams();
     const initialIndex = types.indexOf(type);
     const [tabIndex, setTabIndex] = useState(initialIndex);
     const [services] = useService();
     const Mountain = services.filter(item => item.type === 'Mountains');
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
                    <title>Elara | Book Service</title>
               </Helmet>


               <Cover img={orderCoverImg} title={"BOOK YOUR SERVICE HERE"}></Cover>
               <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                         <Tab>Mountain</Tab>
                         <Tab>Camping</Tab>
                         <Tab>Cruise</Tab>
                         <Tab>City</Tab>
                         <Tab>River</Tab>
                         <Tab>Historical</Tab>
                         <Tab>Natural Phenomena</Tab>
                         <Tab>Beach</Tab>
                    </TabList>
                    <TabPanel>
                         <BookTab items={Mountain}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Camping}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={River}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Historical}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Safari}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={City}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Island}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Cruise}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Winery}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={NaturalPhenomenon}></BookTab>
                    </TabPanel>
                    <TabPanel>
                         <BookTab items={Beach}></BookTab>
                    </TabPanel>
               </Tabs>
          </div>
     );
};

export default Book;