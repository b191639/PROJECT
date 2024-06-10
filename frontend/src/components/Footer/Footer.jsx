import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram,AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
const socialLinks=[
  {
  path:'https://l.instagram.com/?u=http%3A%2F%2Faskapollo.com%2Fapollo-prohealth&e=AT0FgJMETFt9CQWz7-MwKbjJIUP9AcP7zWiK9zt-Ks9RjwRipWm4cAfe0ejNAehU8BKCTDPXWLkn2dg46Hwe-E1rtGKBV_2k2WstlAEdiDg3E5uZ',
  icon:<AiFillInstagram className='group-hover:text-white w-4 h-5'/>,
},
{
  path:'facebook.com/theapollohospitals',
  icon:<AiFillFacebook className='group-hover:text-white w-4 h-5'/>,
  
},
{
  path:'https://www.youtube.com/channel/UC0InVdvqNyNzKBl1-TL348A',
  icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>,

},
{
  path:'https://www.linkedin.com/company/apollo-hospitals?originalSubdomain=in',
  icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5'/>,
},
];
const quickLinks01=[
  {
    path:'/home',
    display:'Home',
  },
  {
    path:'/',
    display:'About Us'
  },
  {
    path:'/services',
    display:"Services",
  },
  {
    path:'/',
    display:"Blog"
  }


];
const quickLinks02=[
  {
    path:'/find-a-dotor',
    display:"Find a Doctor",
  },
  {
    path:'/',
    display:'Request an Appointment',
  },
  {
    path:"/",
    display:'Find a Location',
  },
  {
    path:'/',
    display:'Get a Opinion',
  }
];
const quickLinks03=[
  {
    path:'/',
    display:"Donate",
  },
  {
    path:'/contact',
    display:'Contact Us',
  }
]

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="conatiner mx-10">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor'>
              Copyright © {year} developed by Manne Malathi all rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link,index)=>(
                <Link to={link.path} key={index} 
                className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
       
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links
          </h2>
          <ul>
            {quickLinks01.map((item,index)=>(<li key={index} className='mb-4'>
                <Link to={item.path} > {item.display}</Link></li>
                ))}
          </ul>
        </div>
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to
          </h2>
          <ul>
            {quickLinks02.map((item,index)=>(<li key={index} className='mb-4'>
                <Link to={item.path} > {item.display}</Link></li>
                ))}
          </ul>
        </div>
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support
          </h2>
          <ul>
            {quickLinks03.map((item,index)=>(<li key={index} className='mb-4'>
                <Link to={item.path} > {item.display}</Link></li>
                ))}
          </ul>
        </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
