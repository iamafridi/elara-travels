import ServiceItem from "../../Home/ServiceItem/ServiceItem";
import Cover from "../../Shared/Cover/Cover";

const ServiceCategory = ({items, title ,img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} ></Cover>}
              <div className="mb-10 mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {
                    items.map(item => <ServiceItem
                        key={item.name}
                        item={item}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default ServiceCategory;