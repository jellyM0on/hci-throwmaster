import "./GameScreen.css";
import { useState, useEffect } from "react";

export default function GameScreen({ setScreen }) {
  const [lives, setLives] = useState(3);
  const [trashItem, setTrashItem] = useState("carton box");
  const [can, setCan] = useState("null");

  const trashItems = [
    { name: "carton box", correct: "ArrowDown" },
    { name: "banana peel", correct: "ArrowUp" },
    { name: "battery", correct: "ArrowRight" },
    { name: "plastic bottle", correct: "ArrowDown" },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const correctKey = trashItems.find((item) => item.name === trashItem)?.correct;
      if (event.key === correctKey) {
        setCan("Correct!");
        setTrashItem(trashItems[Math.floor(Math.random() * trashItems.length)].name);
      } else if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        setLives((prevLives) => {
          if (prevLives === 1) {
            setScreen("GameOverScreen");
          }
          return prevLives - 1;
        });
        setCan("Wrong!");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [trashItem, setScreen, trashItems]);

  return (
    <div id="game-screen">
      <div className="header">
        <h3>Lives: {lives}</h3>
      </div>
      <h2>{can}</h2>
      <div className="trash-item">
        <p>{trashItem}</p> {/* Placeholder for asset */}
      </div>
      <div className="instructions">
        <div>Biodegradable (Up)</div>
        <div>Recyclable (Down)</div>
        <div>Non-biodegradable (Left)</div>
        <div>Hazardous (Right)</div>
      </div>
    </div>
  );
}
