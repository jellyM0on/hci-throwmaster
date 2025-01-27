import InfoContainer from "../../components/InfoContainer/InfoContainer";
import "./FinishScoreScreen.css"

import { useEffect } from "react";
import { playBg } from "../../utils/playBg";
import { stopGameBg } from "../../utils/playGameBg";
import playClick from "../../utils/playClick";

import { useNavigate } from "react-router-dom";

function FinishScoreScreen({setScreen}) {
  useEffect(() => {
    stopGameBg();
  }, [])
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

  const score = sessionStorage.getItem("score")
  const time = sessionStorage.getItem("time")
  const mode = sessionStorage.getItem("mode")
  const lives = sessionStorage.getItem("lives")

  // Choose greetings based on completion status
  const greetings = ((mode == "competitive" && time != "00:00" && lives != 0) || lives != 0) ? successGreetings : failureGreetings;
  
  // Randomly select a greeting
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  const navigate = useNavigate();
  
  const handleHome = () => {
    playClick(); 
    navigate("/")
  }

  const handleAgain = () => {
    playClick(); 
    playBg(); 
    setScreen("mode_selection")
  }


  const Content = () => {
    return(
      <div class="result-container">
        <p><strong>Mode:</strong> {mode.toUpperCase()}</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Remaining Lives:</strong> {lives} </p>
        {mode == "competitive" ? <p><strong>Remaining Time: </strong>{time}</p> : null}
        <div class="btn-container">
            <button onClick={handleHome}>Back to Home</button>
            <button onClick={handleAgain}>Play again</button>
        </div>
      </div>
    )
  }
  return (
    <div id="finish-score-screen">
      <InfoContainer title={randomGreeting} content={<Content/>}/>
    </div>
  );
}

export default FinishScoreScreen;
