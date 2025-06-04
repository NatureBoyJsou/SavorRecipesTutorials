import React, { useState } from "react";

const FoodQuiz = ({ onGrainsSelect, onPoultrySelect, onSeafoodSelect, onMeatSelect }) => {
  const [selection, setSelection] = useState("");
  const [result, setResult] = useState(null);

  const options = {
    seafood: "Flame Grilled Mahi Mahi",
    meat: "Restaurant Quality NY Strip",
    poultry: "Herb-Roasted Jerk Chicken",
    grains: "Fresh Scratch Pasta"
  };

  const handleSelection = (category) => {
    setSelection(category);
    setResult(options[category]);

    if (category === "grains" && onGrainsSelect) {
      onGrainsSelect();
    } else if (category === "poultry" && onPoultrySelect) {
      onPoultrySelect();
    } else if (category === "seafood" && onSeafoodSelect) {
      onSeafoodSelect();
    } else if (category === "meat" && onMeatSelect) {
      onMeatSelect();
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>What Are You Hungry For?</h2>
      <div style={styles.buttonGroup}>
        {Object.keys(options).map((category) => (
          <button
            key={category}
            style={styles.button}
            onClick={() => handleSelection(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      {result && (
        <div style={styles.resultBox}>
          <p style={styles.resultText}>
            Check Out This Recipe Below⬇️<br />
            <strong>{result}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
    fontFamily: "RubikDirt",
    fontWeight: "100",
    maxWidth: "500px",
    margin: "2rem auto",
    boxShadow: "0 0 12px rgba(239, 162, 8, 0.6)",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.8rem",
    fontWeight: "100",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "orange",
    fontFamily: "RubikDirt",
    color: "black",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  resultBox: {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "8px",
  },
  resultText: {
    fontSize: "1.2rem",
  },
};

export default FoodQuiz;
