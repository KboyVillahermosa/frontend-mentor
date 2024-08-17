import React, { useState } from 'react';
import './Works.css'

interface CardData {
  id: number;
  title: string;
  description: string;
}

const cardDetails: CardData[] = [
  { id: 1, title: 'Card 1', description: 'Browse our collection of professionally designed projects. Pick one that suits the level you’re currently at.' },
  { id: 2, title: 'Card 2', description: 'Browse our collection of professionally designed projects. Pick one that suits the level you’re currently at.' },
  { id: 3, title: 'Card 3', description: 'Browse our collection of professionally designed projects. Pick one that suits the level you’re currently at.' },
  { id: 4, title: 'Card 4', description: 'Browse our collection of professionally designed projects. Pick one that suits the level you’re currently at.' }
];

const Works: React.FC = () => {
  // Initialize with the ID of the card that should display the default image
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
    <div className="how-it-works">
      <div className="cards">
        {cardDetails.map(card => (
          <div
            key={card.id}
            className={`card ${activeCard === card.id ? 'active' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <h3>{activeCard === card.id ? card.title : 'Choose your challenge'}</h3>
            {activeCard === card.id && <p>{card.description}</p>}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {renderImage()}
      </div>
    </div>
  );
};

export default Works;
