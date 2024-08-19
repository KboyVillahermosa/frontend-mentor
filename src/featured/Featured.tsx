import React from "react";
import "./Featured.css";

const Featured: React.FC = () => {
  return (
    <>
      <div className="featured-title flex justify-center ">
        <h1>AS FEATURED ON...</h1>
      </div>
      <div className="featured-header">
        <div className="featured-content">
          <img src="/css.svg" alt="" />
        </div>
        <div className="featured-content">
          <img src="/overflow.svg" alt="" />
        </div>
        <div className="featured-content">
          <img src="/product.svg" alt="" />
        </div>
      </div>

      {/*----------------------  tutorial hell  ---------------------------*/}

      <div className="tips-header">
        <div className="tips-image">
          <img src="/home-benefit.webp" alt="" />
        </div>
        <div className="tips-content">
          <span className="emoji rounded-full bg-blue-100 p-1 text-5xl">
            😈
          </span>
          <h1 className=" mt-5">Escape tutorial hell</h1>
          <p className="mt-3 text-gray-500">
            Add projects to your learning journey and put your knowledge to the
            test. The real learning happens when you start solving real-world
            problems yourself.
          </p>
        </div>

        {/*----------------------  Build portfolio-worthy projects ---------------------------*/}

        <div className="tips-content">
          <span className="emoji rounded-full bg-blue-100 p-1 text-5xl">
            🤩
          </span>
          <h1 className=" mt-5">Build portfolio-worthy projects</h1>
          <p className="mt-3 text-gray-500">
            Design is hard. We take care of the project ideas and design so you
            can focus on the coding. You’ll end up with an incredible portfolio
            of stunning projects!
          </p>
        </div>
        <div className="tips-image">
          <img src="/home-benefit-2.webp" alt="" />
        </div>

        {/*---------------------- Banish impostor syndrome   ---------------------------*/}
        <div className="tips-image">
          <img src="/home-benefit-3.webp" alt="" />
        </div>
        <div className="tips-content">
          <span className="emoji rounded-full bg-blue-100 p-1 text-5xl">
            🚀
          </span>
          <h1 className=" mt-5">Banish impostor syndrome</h1>
          <p className="mt-3 text-gray-500">
            We’ve all felt out of our depth before. Getting hands-on experience
            is an incredible way to build confidence, refine your workflow, and
            supercharge your learning.
          </p>
        </div>

        {/*---------------------- Practice new tools  ---------------------------*/}

        <div className="tips-content">
          <span className="emoji rounded-full bg-blue-100 p-1 text-5xl">
            🔨
          </span>
          <h1 className=" mt-5">Practice new tools</h1>
          <p className="mt-3 text-gray-500">
            The front-end landscape changes constantly. Our design-led
            challenges let you pick your tools to help you adapt, experiment,
            and keep up with the latest trends.
          </p>
        </div>
        <div className="tips-image">
          <img src="/home-benefit-44.webp" alt="" />
        </div>

        {/*---------------------- Create job opportunities ---------------------------*/}
        <div className="tips-image">
          <img src="/home-benefit-5.webp" alt="" />
        </div>
        <div className="tips-content">
          <span className="emoji rounded-full bg-blue-100 p-1 text-5xl">
            🤝
          </span>
          <h1 className=" mt-5">Create job opportunities</h1>
          <p className="mt-3 text-gray-500">
            We have a Hiring Platform that runs alongside this platform. Just by
            building projects and engaging with the community, you could open up
            job opportunities!
          </p>
        </div>
      </div>
    </>
  );
};

export default Featured;
