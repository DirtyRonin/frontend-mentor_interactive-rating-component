import React from 'react';
import './rating.css';
import iconStar from '../../images/icon-star.svg';
import { RatingItem } from './rating-item';

export function Rating() {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const ratingItems = [...Array(6).keys()].slice(1);
  const isSelected = (currentIndex: number) => selectedIndex === currentIndex;

  return (
    <div className="rating">
      <div className="circle">
        <img className="icon-star" alt="" src={iconStar} />
      </div>
      <div>
        <div className="title">
          <p>How did we do?</p>
        </div>
        <div className="description">
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
      </div>
      <div className="select">
        {ratingItems.map((item, index) => (
          <RatingItem value={item} selectRating={setSelectedIndex} isSelected={isSelected(item)} key={`rating-item-${index}`} />
        ))}
      </div>
      <div>
        <button className="submit">
          <p>submit</p>
        </button>
      </div>
    </div>
  );
}
