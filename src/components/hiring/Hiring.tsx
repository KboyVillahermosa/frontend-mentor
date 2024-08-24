import React from "react";
import './Hiring.css'


const Hiring: React.FC = () => {
  return (
    <>
      <div className="hiring-header bg-blue-800">
        <div className="hiring-content">
          <h1 className="text-white">Are you looking to hire talented, passionate developers?</h1>
          <p className="text-white mt-4">
            Our Hiring Platform helps you connect with our diverse community of
            talented early-career developers. Stop wading through hundreds of
            resumes and get chatting to skilled developers in minutes.
          </p>
          <button className="bg-gray-100 p-2 rounded-full mt-4 hover:bg-slate-300 text-blue-800">START HIRING DEVELOPERS</button>
        </div>
        <div className="hiring-image">
            <img src="/home-hiring.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hiring;
