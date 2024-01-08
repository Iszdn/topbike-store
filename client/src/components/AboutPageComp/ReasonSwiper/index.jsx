import React from 'react';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Reasons = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}

    autoplay={{
       
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
       <SwiperSlide> 
        <div className='text-center itemtservice justify-content-center'>
<div className='box-service'>
<h4>FREE SHIPPING & RETURN</h4>
<p>Free worldwide shipping on all area order above $100</p>
</div>
    </div>
    </SwiperSlide>  
    <SwiperSlide> 
        <div className='text-center itemtservice justify-content-center'>
<div className='box-service'>
<h4>QUALITY GUARANTEED</h4>
<p>If your product aren't perfect, return them for a full refund</p>
</div>
    </div>
    </SwiperSlide>
    <SwiperSlide> 
        <div className='text-center itemtservice justify-content-center'>
<div className='box-service'>
<h4>24/7 FRIENDLY SUPPORT</h4>
<p>Our support team always ready for you to 7 days a week</p>
</div>
    </div>
    </SwiperSlide>
    
    </Swiper>
   
  )
}

export default Reasons