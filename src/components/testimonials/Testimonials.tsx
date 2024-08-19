import React from "react";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="blockqoute">
        <div className="blockqoute-content">
          <svg
            className="qoute mb-5 flex items-center text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
          <div className="image-qoute">
            <img src="/ava1.jpg" alt="" className="mt-5 mb-5" />
          </div>
          <div className="qoute-text">
            <h1 className="kevin">Kevin powell</h1> 
            <h3>Web Developer & Youtuber</h3>
          </div>
        </div>
        <div className="blockqoute-content">
          <svg
            className="qoute mb-5 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
          <div className="image-qoute">
            <img src="/ava1.jpg" alt="" className="mt-5 mb-5" />
          </div>
          <div className="qoute-text">
            <h1 className="kevin">Kevin powell</h1> 
            <h3>Web Developer & Youtuber</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
