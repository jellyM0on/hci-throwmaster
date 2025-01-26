import "./GameOverScreen.css";

export default function GameOverScreen({ setScreen }) {
  const handleRetry = () => {
    setScreen("GameScreen");
  };

  return (
    <div id="game-over-screen">
      <h1>Game Over</h1>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}
