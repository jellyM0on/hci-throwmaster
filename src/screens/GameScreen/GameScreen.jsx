import "./GameScreen.css"

import { useState, useEffect } from "react"; 

export default function GameScreen({setScreen}) {
    const [can, setCan] = useState("null")

    useEffect(() => {
        const handleKeyDown = (event) => {
          switch (event.key) {
            case 'ArrowUp':
              setCan('red');
              break;
            case 'ArrowDown':
              setCan('yellow');
              break;
            case 'ArrowLeft':
              setCan('blue');
              break;
            case 'ArrowRight':
              setCan('green');
              break;
            default:
              break;
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return(
        <div id="game-screen">
            <h2>{can}</h2>
            <div>object</div>
            <div>
                <div>yellow</div>
                <div>red</div>
                <div>green</div>
                <div>blue</div>
            </div>
        </div>
    )
}