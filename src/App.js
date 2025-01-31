import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [wordCounts, setWordCounts] = useState([]);

  const countWords = () => {
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(/\s+/);

    const frequency = words.reduce((acc, word) => {
      if (word) {
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});

    const sortedWords = Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20); // Get the top 20 most common words

    setWordCounts(sortedWords);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Job Description Keyword Extractor</h2>
      <textarea
        rows="10"
        cols="50"
        placeholder="Paste job descriptions here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />
      <button
        onClick={countWords}
        style={{ marginTop: "10px", padding: "10px" }}
      >
        Extract Keywords
      </button>
      <h3>Top Keywords:</h3>
      <ul>
        {wordCounts.map(([word, count], index) => (
          <li key={index}>
            {word}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
