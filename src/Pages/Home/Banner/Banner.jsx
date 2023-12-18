import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from '../../../assets/Banner/banner1.jpg'
import banner2 from '../../../assets/Banner/banner2.jpg'
import banner3 from '../../../assets/Banner/banner3.jpg'
import banner4 from '../../../assets/Banner/banner4.jpg'
import banner5 from '../../../assets/Banner/banner5.jpg'
import banner6 from '../../../assets/Banner/banner6.jpg'
import banner7 from '../../../assets/Banner/banner7.jpg'
import banner8 from '../../../assets/Banner/banner8.jpeg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <div className='border text-center  border-black'>
                    <h2 className='text-6xl absolute w-full h-full py-48 '>Explore The Mountains</h2>
                </div>
                <img src={banner3} />
            </div>
            <div>
                <div className='border text-center  border-black'>
                    <h2 className='text-6xl absolute w-full h-full py-48 '>Reach The Peak <br /><span>With US</span></h2>

                </div>
                <img src={banner4} />
            </div>
            <div>
                <div className='border text-center  border-black'>
                    <h2 className='text-6xl uppercase absolute w-full text-white h-full py-64 '>Say Hi TO THE Glacius</h2>
                </div>
                <img src={banner5} />
            </div>
            <div>
            <div className='border text-center  border-black'>
           <h2 className='text-6xl absolute w-full h-full py-48 '><span className='text-white'>Explo</span>re The Mountains</h2>
           </div>
                <img src={banner1} />
            </div>
            <div>
            <div className='border text-center  border-black'>
                    <h2 className='text-6xl absolute w-full h-full py-48 '>Explore The Mountains</h2>
                </div>
                <img src={banner2} />
            </div>

            <div>
            <div className='border text-center  border-black'>
                    <h2 className='text-6xl text-gray-50 absolute w-full h-full py-48 '>Spend a Night In the Forest</h2>
                </div>
                <img src={banner6} />
            </div>
            <div>
            <div className='border text-center  border-black'>
                    <h2 className='text-6xl text-white absolute w-full h-full py-48 '>Tent Life in The Mountains</h2>
                </div>
                <img src={banner7} />
            </div>
            <div>
            <div className='border text-center  border-black'>
                    <h2 className='text-6xl text-gray-50 absolute w-full h-full py-48 '>Go Boating </h2>
                </div>
                <img src={banner8} />
            </div>
        </Carousel>
    );
};

export default Banner;