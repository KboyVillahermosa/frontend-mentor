import React from "react";
import './Join.css'
import { FaGithub } from "react-icons/fa";

const Join: React.FC = () => {
  return (
    <>
      <div className="join-header">
        <div className="join-header-content">
          <h1 className="text-blue-900">
            Join 879,541 people building portfolio-worthy projects
          </h1>
          <p className="text-gray-500 mt-5">
            Our highly supportive, positive community is here to help you
            improve your skills. We all try to help each other out wherever
            possible. We’d love to welcome you to our community!
          </p>
        </div>
      </div>
      <div className="join-btn justify-center">
          <button className="text-xs mt-3 p-3 bg-red-500 text-white rounded-full flex ">LOGIN WITH GITHUB <FaGithub className="ml-2" /></button>
          </div>
    </>
  );
};

export default Join;
