import React from 'react';
import './thank-you.css';
import thanksImage from '../../images/illustration-thank-you.svg';

interface thankYouProps {
  selectedRating: number;
}

export function ThankYou({ selectedRating }: thankYouProps) {
  return (
    <div className="thanks">
      <img src={thanksImage} alt="" className="thanks-image" />
      <div className="feedback">
        <p>{`You selected ${selectedRating} out of 5`}</p>
      </div>
      <div className="header">
        <p>Thank you!</p>
      </div>
      <div className='description'>
        <p>We appreciate you taking the time to give a rarting. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  );
}
