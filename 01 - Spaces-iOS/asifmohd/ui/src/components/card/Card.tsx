import React, { useEffect, useRef } from 'react';
import './Card.scss';

const Card: React.FC<{
  space;
  onScroll: Function;
}> = ({ space, onScroll }) => {
  const imgRef = useRef(null);
  useEffect(() => {
    onScroll(imgRef.current);
  }, [onScroll]);
  return (
    <div className="Card-container">
      <div className="Card">
        <div className="Card-image">
          <img src={space?.bg_image} alt="" ref={imgRef} />
          <div className=" "></div>
        </div>
        <div className="Card-info">
          <h2 className="Card-title">{space.title}</h2>
          <div className="Card-sub">
            {space.description.count +
              ' ' +
              space.description.type.toUpperCase() +
              (space.description.count > 1 && 'S')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
