import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [joke, setJoke] = useState('Loading joke...');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any');
      const jokeData = await response.json();
      if (jokeData.type === 'single') {
        setJoke(jokeData.joke);
      } else {
        setJoke(`${jokeData.setup}\n${jokeData.delivery}`);
      }
    } catch (error) {
      setJoke('Failed to fetch joke.');
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center font-mono p-6 w-[700px] bg-teal-200 rounded-lg shadow-md">
        <h2 className="font-semibold text-teal-800 text-xl pb-2">JOKE-O-MATIC 3000</h2>
        <div id="joke" className="text-md text-teal-600 mb-4">{joke}</div>
        <button
          onClick={fetchJoke}
          className="px-4 py-2 bg-teal-500 text-white text-sm rounded hover:bg-teal-700"
        >
          Generate Joke
        </button>
      </div>
    </div>
  );
}

export default App;

