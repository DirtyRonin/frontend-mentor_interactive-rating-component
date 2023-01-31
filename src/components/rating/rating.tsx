import React from 'react';
import './rating.css';
import iconStar from '../../images/icon-star.svg';
import { RatingItem } from './rating-item';
import { useNavigate } from 'react-router-dom';

interface ratingProps {
  selectedRating: number;
  setSelectedRating: (index: number) => void;
}

export function Rating({ selectedRating, setSelectedRating }: ratingProps) {
  const ratingItems = [...Array(6).keys()].slice(1);
  const isSelected = (currentRating: number) => selectedRating === currentRating;
  const navigate = useNavigate();

  const onSubmit = () => {
    if (selectedRating > 0) navigate('/thanks');
  };

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
          <RatingItem value={item} setSelectedRating={setSelectedRating} isSelected={isSelected(item)} key={`rating-item-${index}`} />
        ))}
      </div>
      <div>
        <button className="submit" onClick={onSubmit}>
          <p>submit</p>
        </button>
      </div>
    </div>
  );
}
