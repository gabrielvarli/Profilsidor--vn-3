// DarkModeToggle.js
import { useState } from 'react';
import './App.css'; 

export default function DarkModeToggle() {
  // State för att hålla reda på mörkt läge
  const [darkMode, setDarkMode] = useState(false);

  // Funktion som togglar mellan mörkt och ljust läge
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <button 
        onClick={toggleDarkMode} 
        className={darkMode ? 'dark-mode-button light' : 'dark-mode-button'}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
