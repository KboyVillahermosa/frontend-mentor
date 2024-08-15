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
        </div>
        <div className="header-img">
            <img src="/public/image/home-hero (1).webp" alt="" />
        </div>
    </div>
    </>
  )
}
export default Header