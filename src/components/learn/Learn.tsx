import React from "react";
import { FaFigma } from "react-icons/fa";
import { PiShootingStarLight } from "react-icons/pi";
import "./Learn.css";

const Learn: React.FC = () => {
  return (
    <>
      <div className="learn-title">
        <div className="learn-title-content">
        <h1>
          Take you skills to the next level with our
          <span className="span-pro bg-blue-900 text-white mr-3 ml-3"> PRO </span>
          subscription
        </h1>
        </div>
      </div>

      <div className="learn-header-card">
        <div className="learn-header-card-content">
            <div className="icons flex items-center">
            <span className="text-blue-900"><FaFigma  className="figma-icon text-5xl"/></span>
            </div>
          <h1 className="">Access each challenge’s design file</h1>
          <p className="text-gray-500">
            Professional teams use tools like Figma. By using these tools when
            building projects, you’ll save time, create more accurate solutions,
            and gain hands-on experience working like a pro.
          </p>
        </div>

        {/* ----------------------------------------------- */}

        <div className="learn-header-card-content">
            <div className="icons flex items-center">
            <span className="text-blue-900 text-5xl"><PiShootingStarLight className="" /></span>
            </div>
          <h1 className="">Access each challenge’s design file</h1>
          <p className="text-gray-500">
            Professional teams use tools like Figma. By using these tools when
            building projects, you’ll save time, create more accurate solutions,
            and gain hands-on experience working like a pro.
          </p>
        </div>
      </div>

      <div className="learn-about-pro">
        <button className="bg-red-600 hover:bg-red-700 text-white">LEARN ABOUT PRO</button>
      </div>
    </>
  );
};

export default Learn;
