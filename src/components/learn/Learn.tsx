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
            <span className="span-pro ml-3 mr-3 bg-blue-900 text-white">
              {" "}
              PRO{" "}
            </span>
            subscription
          </h1>
          <p className="text-gray-500 mt-5">
            Step into the shoes of a professional developer and build projects
            in the most realistic way possible. Our Pro subscription will help
            you prepare for life as a professional developer.
          </p>
        </div>
      </div>

      <div className="learn-header-card">
        <div className="learn-header-card-content">
          <div className="icons flex items-center">
            <span className="text-blue-900">
              <FaFigma className="figma-icon text-5xl" />
            </span>
          </div>
          <h1 className="mt-5 mb-5">Access each challenge’s design file</h1>
          <p className="text-gray-500">
            Professional teams use tools like Figma. By using these tools when
            building projects, you’ll save time, create more accurate solutions,
            and gain hands-on experience working like a pro.
          </p>
        </div>

        {/* ----------------------------------------------- */}

        <div className="learn-header-card-content">
          <div className="icons flex items-center">
            <span className="text-5xl text-blue-900">
              <PiShootingStarLight className="" />
            </span>
          </div>
          <h1 className="mt-5 mb-5">Access each challenge’s design file</h1>
          <p className="text-gray-500">
            Professional teams use tools like Figma. By using these tools when
            building projects, you’ll save time, create more accurate solutions,
            and gain hands-on experience working like a pro.
          </p>
        </div>
      </div>

      <div className="learn-about-pro">
        <button className="bg-red-500 text-white hover:bg-red-600">
          LEARN ABOUT PRO
        </button>
      </div>
    </>
  );
};

export default Learn;
