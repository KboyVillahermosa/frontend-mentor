import React, { useState } from "react";
import "./Works.css";

interface CardData {
  id: number;
  title: string;
  description: string;
}

const cardDetails: CardData[] = [
  {
    id: 1,
    title: "Choose your challenge",
    description:
      "Browse our collection of professionally designed projects. Pick one that suits the level you’re currently at.",
  },
  {
    id: 2,
    title: "Code the design",
    description:
      "Each project comes with all files included. This means you can focus on coding the project using the design as a reference.",
  },
  {
    id: 3,
    title: "Submit your solution",
    description:
      "Get feedback from the community about your code and see how close you got to the design.",
  },
  {
    id: 4,
    title: "Give others feedback",
    description:
      "Reviewing other people’s code is a vital part of being a developer. Practice giving code reviews and help others improve.",
  },
];

const Works: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  const renderImage = () => {
    switch (activeCard) {
      case 1:
        return <img src="/works1.webp" alt="Image 1" className="image" />;
      case 2:
        return <img src="/works2.webp" alt="Image 2" className="image" />;
      case 3:
        return <img src="/works3.webp" alt="Image 3" className="image" />;
      case 4:
        return <img src="/works4.webp" alt="Image 4" className="image" />;
      default:
        return <img src="works1.jpg" alt="Image 1" className="image" />;
    }
  };

  return (
    <>
      <div className="how-it-works-header">
        <div className="how-it-works">
          <div className="cards">
            {cardDetails.map((card) => (
              <div
                key={card.id}
                className={`card ${activeCard === card.id ? "active" : ""}`}
                onClick={() => handleCardClick(card.id)}
              >
                <h3>{card.title}</h3>
                {activeCard === card.id && <p>{card.description}</p>}
              </div>
            ))}
          </div>
          <div className="tab-content">{renderImage()}</div>
        </div>
      </div>
    </>
  );
};

export default Works;
