import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>Hello, World!</h1>
      <img src="src/img/LowRes_Headshot.jpg" className="headshot" alt="headshot" />
      <div>I&apos;m Henry Stauch, a junior at Dartmouth College studying geography and computer science. </div>
      <div className="buttons">
        <button type="button" className="landing-button" onClick={() => navigate('/about')}>About Me </button>
        <button type="button" className="landing-button" onClick={() => navigate('/contact')}>Contact </button>
      </div>
    </div>
  );
}

export default LandingPage;
