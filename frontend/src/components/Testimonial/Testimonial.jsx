import React from 'react'
import { Pagination } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import patientAvatar2 from '../../assets/images/patient-avatar2.jpg'
import patientAvatar3 from '../../assets/images/patient-avatar3.jpg'
import patientAvatar4 from '../../assets/images/patient-avatar4.jpg'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
    <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1}
    pagination={{clickable:true}}
    breakpoints={{
        640:{
            slidesPerView:1,
            spaceBetween:0,
        },
        768:{
            slidesPerView:2,
            spaceBetween:20,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30,
        },
    }}>
    <SwiperSlide>
    <div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
    <img src={patientAvatar} alt=""/>
    <div>
       <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rahman</h4>
       <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/> 
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
       </div>

    </div>
    </div>
    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
      I have taken medical services from them.They treat so well and They are providing the best medical services."
    </p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
    <img src={patientAvatar3} alt=""/>
    <div>
       <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abdullah</h4>
       <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/> 
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
       </div>

    </div>
    </div>
    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
    The hospital provided outstanding medical services, and I am grateful for their excellent care."
    </p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
    <img src={patientAvatar4} alt=""/>
    <div>
       <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Rajeev Rao</h4>
       <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/> 
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
       </div>

    </div>
    </div>
    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
      I received exceptional medical care from this hospital; their treatment and services are top-notch."
    </p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
    <img src={patientAvatar2} alt=""/>
    <div>
       <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Gopala Krishnan</h4>
       <div className="flex items-center gap-[2px]">
        <HiStar className='text-yellowColor w-[18px] h-5'/> 
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
        <HiStar className='text-yellowColor w-[18px] h-5'/>
       </div>

    </div>
    </div>
    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
      The hospital staff's professionalism and compassionate care made my medical experience truly remarkable."
    </p>
    </div>
    </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Testimonial
