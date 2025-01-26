import React from 'react';

function FinishScoreScreen({ score, onPlayAgain, onMainMenu, completed }) {
  // Define greetings for success and failure scenarios
  const successGreetings = [
    "You rock!",
    "Way to go!",
    "Awesome!",
    "Amazing!",
    "Cool!",
    "That's the stuff!",
    "You're killing it!",
    "High five!",
    "Well done!",
    "Fantastic job!",
    "Impressive!",
    "You've done a wonderful job.",
    "Excellent effort!"
  ];

  const failureGreetings = [
    "Nice try!",
    "Try again!",
    "You can do it!",
    "Don't give up!",
    "Keep going!",
    "Almost there!",
    "Better luck next time!",
    "Stay determined!"
  ];

  // Choose greetings based on completion status
  const greetings = completed ? successGreetings : failureGreetings;

  // Randomly select a greeting
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <div className="finish-score-screen">
      <h1 className="title">{randomGreeting}</h1>
      <h2 className="score-header">Your Score:</h2>
      <p className="score-value">{score} correct turns</p>
      <div className="button-container">
        <button 
          className="play-again-button" 
          onClick={onPlayAgain}>
          Play Again
        </button>
        <button 
          className="main-menu-button" 
          onClick={onMainMenu}>
          Main Menu
        </button>
      </div>
    </div>
  );
}

export default FinishScoreScreen;
