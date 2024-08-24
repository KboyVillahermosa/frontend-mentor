import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Community.css";

const Community: React.FC = () => {
  const testimonials = [
    {
      name: "Francesca",
      description:
        "This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.",
      quote: "This service is fantastic!",
      image: "/speed.jpg",
    },
    {
      name: "Alfie",
      description: "Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.",
      quote: "@alfiemitchell123",
      image: "/speed.jpg",
    },
    {
      name: "Hikmah",
      description: "Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
      quote: "@Hikmahx",
      image: "/speed.jpg",
    },
    {
      name: "Nuel",
      description: "Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.",
      quote: "@ijklmopffs",
      image: "/speed.jpg",
    },
    {
      name: "Michelle",
      description: "After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn’t be where I am today without it.",
      quote: "@maberizk",
      image: "/speed.jpg",
    },
    {
        name: "Arturo",
        description: "As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can’t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.",
        quote: "@artimys",
        image: "/speed.jpg",
      },
      {
        name: "Shashikant",
        description: "Frontend Mentor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It’s both a skill-building platform and a community hub for web developers.",
        quote: "@shashikantdev3",
        image: "/speed.jpg",
      },
      {
        name: "Marit",
        description: "I began my frontend journey with Frontend Mentor’s newbie challenges and progressed to more complex projects. Some of the complex ones are now even in my portfolio! The supportive community and the dedication of the Frontend Mentor team are unmatched. I highly recommend it for newcomers and those keen on improving their skills.",
        quote: "@Maritxx",
        image: "/speed.jpg",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
 // Handle window resizing
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= testimonials.length
        ? 0
        : prevIndex + itemsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - itemsToShow
        : prevIndex - itemsToShow
    );
  };

  return (
    <div className="card-slider-headerz mx-auto w-full max-w-6xl p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="h2-community">A little ❤️️ from our community</h2>
        <div className="flex">
          <button
            onClick={handlePrev}
            className="arrow-left rounded-full bg-gray-200 p-5 hover:bg-blue-700 hover:text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="ml-2 rounded-full bg-gray-200 p-5 hover:bg-blue-600 hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-2"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="slider-card rounded-lg bg-white p-4 shadow-md">
                <p className="mb-2 text-center text-lg text-gray-700">
                  {testimonial.description}
                </p>
                <div className="slider-image-header">
                  <div className="slider-image-content mt-2 mr-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mx-auto mb-4 h-16 w-16 rounded-full"
                    />
                  </div>
                  <div className="slider-text mt-5">
                    <p className="mb-2 text-center text-lg">
                      {testimonial.quote}
                    </p>
                    <p className="text-center text-sm text-gray-500">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
