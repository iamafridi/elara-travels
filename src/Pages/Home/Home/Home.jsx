import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularServices></PopularServices>
        </div>
    );
};

export default Home;