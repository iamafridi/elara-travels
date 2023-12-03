import { Helmet } from "react-helmet-async";
import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularServices from "../PopularServices/PopularServices";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elara | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularServices></PopularServices>
           <Featured></Featured>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;