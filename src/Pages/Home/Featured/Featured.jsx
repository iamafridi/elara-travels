import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/Destinations/destination6.png'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle 
            subHeading={"Check It Out"}
            heading={"Most Highlighted"}
            ></SectionTitle>

            <div className=" md:flex justify-center items-center py-20 px-36 bg-slate-300 bg-opacity-30 ">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 hover:bg-slate-500 hover:p-10">
                    <p>Dec 04, 2023</p>
                    <p className="Is this a Worth to visit?"></p>
                    <p>The Northern Lights, or Aurora Borealis, offer a mesmerizing natural light show in the polar regions. It's a magical experience under the dancing colorful skies.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Read More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;