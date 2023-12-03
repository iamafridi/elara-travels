import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/Destinations/destination1.jpg'
import img2 from '../../assets/Destinations/destination2.jpg'
import img3 from '../../assets/Destinations/destination3.jpg'
import img4 from '../../assets/Destinations/destination4.jpg'
import img5 from '../../assets/Destinations/destination5.jpg'
import img6 from '../../assets/Destinations/destination6.png'
import img7 from '../../assets/Destinations/destination7.jpg'
import img8 from '../../assets/Destinations/destination8.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
             subHeading={"Winter to till Summer"}
             heading={"Book Online"}>
               
            </SectionTitle>
            <Swiper

                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img className='w-full h-80 ' src={img1} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '>River And Mountains</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img2} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '> Local Mountains</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img3} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '>Mountains</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img4} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '>Forest</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img5} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '>Climbing</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img6} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '> Tent Camp Fire </h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img7} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '>Forest Camping</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-80' src={img8} alt="" />
                    <h3 className='text-2xl shadow-xl shadow-black  uppercase text-center -mt-20 text-white font-bold '>Forest Housing</h3>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Category;