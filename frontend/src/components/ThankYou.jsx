import React from 'react';
import Button2 from './Button2';

const ThankYou = () => {
  const goToHome = () => {
    // Replace with your logic for navigating to home
    console.log('Navigate to Home');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <h1 className="text-[48px] tracking-[0.06rem] mb-6 font-poppins">
        Thank You For Your Response! <span role="img" aria-label="smile">😊</span>
      </h1>

      <Button2 ctaText="Go To Home" navigateToContact={ false } />
    </div>
  );
};

export default ThankYou;
