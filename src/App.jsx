import { useState, useEffect } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load saved mood
  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMood(savedMood);
    }
  }, []);

  // Save mood
  useEffect(() => {
    if (mood) {
      localStorage.setItem("mood", mood);
    }
  }, [mood]);

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const getAffirmation = () => {
    if (mood.includes("Happy")) {
      return "Keep shining! Your positive energy is contagious ✨";
    }
    if (mood.includes("Okay")) {
      return "You're doing fine. One step at a time 💪";
    }
    if (mood.includes("Sad")) {
      return "It's okay to feel sad. You are not alone 💙";
    }
    return "";
  };

  const clearMood = () => {
    setMood("");
    localStorage.removeItem("mood");
  };

  const buttonStyle = {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4f6cff",
    color: "white",
    marginRight: "8px",
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        width: "350px",
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginBottom: "15px",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          backgroundColor: darkMode ? "#f1c40f" : "#2c3e50",
          color: "white",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>Mental Wellness App 💙</h1>
      <p>How are you feeling today?</p>

      <button style={buttonStyle} onClick={() => setMood("Happy 😊")}>
        Happy
      </button>
      <button style={buttonStyle} onClick={() => setMood("Okay 😐")}>
        Okay
      </button>
      <button style={buttonStyle} onClick={() => setMood("Sad 😔")}>
        Sad
      </button>

      {mood && <h2>Your mood: {mood}</h2>}

      {mood && (
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          {getAffirmation()}
        </p>
      )}

      {mood && (
        <button
          onClick={clearMood}
          style={{
            marginTop: "10px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Clear Mood
        </button>
      )}
    </div>
  );
}

export default App;
