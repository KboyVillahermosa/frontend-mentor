import React from 'react'
import './Header.css'
import { FaGithub } from "react-icons/fa";

const Header:React.FC = () => {
  return (
    <>
    <div className="header">
        <div className="header-content">
            <h1 className='text-blue-500'>Improve your coding skills by building realistic projects</h1>
            <p className='header-para'>Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript.
                 We create the designs so you can focus on the code and see your skills skyrocket!</p>
                 <div className='log-div'>
                 <button className='login-github uppercase flex'><p className='mr-2'>login with github</p> <FaGithub className='github-icon text-xl' /></button>
                 </div>
                 <div className="join">
                  <div className="join-image">
                    <img src="/avatars.webp" alt="" />
                  </div>
                 <div className="join-content">
                  <p>Join <span className='join-content-count text-blue-900 font-bold'>875,571</span> developers building projects, reviewing code, and helping each other improve.</p>
                 </div>
                 </div>
        </div>
        <div className="header-img">
            <img src="/home-hero (1).webp" alt="" />
        </div>
    </div>
    </>
  )
}
export default Header