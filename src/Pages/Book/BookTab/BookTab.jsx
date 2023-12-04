import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const BookTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            items.map(item => <ServiceCard
                key={item.id}
                item={item}
            ></ServiceCard>)
        }
    </div>
    );
};

export default BookTab;