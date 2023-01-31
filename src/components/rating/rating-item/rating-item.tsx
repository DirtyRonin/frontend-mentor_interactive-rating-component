import React from 'react';
import './rating-item.css';

interface ratingItemProps {
  value: number;
  isSelected: boolean;
  setSelectedRating: (value: number) => void;
}

export function RatingItem({ value, isSelected, setSelectedRating: selectRating }: ratingItemProps) {
  const onSelect = () => selectRating(value);

  return (
    <button className="rating-button" onClick={onSelect}>
      <div className={`circle${isSelected ? '--selected' : ''}`}>{value}</div>
    </button>
  );
}
