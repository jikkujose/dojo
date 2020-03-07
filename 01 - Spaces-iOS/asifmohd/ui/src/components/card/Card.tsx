import React from 'react';
import './Card.scss';

const Card: React.FC<{ src: string }> = ({ src }) => (
  <div className="Card-container">
    <div className="Card">
      <div className="Card-image">
        <img src={src} alt="" />
      </div>
      <div className="Card-info">
        <h2 className="Card-title">Relative UI Kit</h2>
        <div className="Card-sub">7 PROJECTS</div>
      </div>
    </div>
  </div>
);

export default Card;
