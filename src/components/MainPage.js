import React from 'react';
import './MainPage.css'; // Ensure this file is in the same directory as MainPage.js
import GestureToSpeech from './features/GestureToSpeech';
import SpeechToText from './features/SpeechToText';

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Header or Hero Section */}
      <header className="main-header">
        <h1>LiveSub - Communication without Borders</h1>
        <p>A platform translating speech to text and gestures to speech.</p>
      </header>

      {/* Feature Section */}
      <div className="feature-section">
        <SpeechToText />
        <GestureToSpeech />
      </div>

      {/* Mission Statement */}
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>To overcome communication barriers for deaf and mute people by converting speech to text and gestures to speech using the latest technologies.</p>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <h2>Key Features</h2>
        {/* List your key features here */}
      </section>

      {/* Target Audience */}
      <section className="target-audience">
        <h2>Target Audience</h2>
        {/* Describe the target audience here */}
      </section>

      {/* Impact and Prospects */}
      <section className="impact">
        <h2>Impact and Prospects</h2>
        {/* Describe the impact and future prospects here */}
      </section>

      {/* Footer */}
      <footer className="main-footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default MainPage;