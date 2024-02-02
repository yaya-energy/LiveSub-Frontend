// At the top of your SpeechToText.js file
import React, { useEffect } from 'react'; // Import useEffect from React

// Correct the import path to point to the src/services directory
import { fetchData } from '../../services/api';

const SpeechToText = () => {
  useEffect(() => {
    const getSpeechToTextData = async () => {
      const data = await fetchData();
      console.log(data);
    };

    getSpeechToTextData();
  }, []);

  return (
    <div className="speech-to-text-feature">
      {/* Display converted text here */}
    </div>
  );
};

export default SpeechToText;