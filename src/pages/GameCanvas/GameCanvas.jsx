import { useEffect, useState } from "react"
import bg from "../../assets/bg.png"
import "./GameCanvas.css"

import ModeSelectionScreen from "../../screens/ModeSelectionScreen/ModeSelectionScreen";
import GameScreen from "../../screens/GameScreen/GameScreen";
import TutorialScreen from "../../screens/TutorialScreen/TutorialScreen";

export default function GameCanvas({screen, setScreen}){
    useEffect(() => {
        const body = document.body;
        body.style.overflow = "hidden"; 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

    }, [])

    const renderScreen = () => {
        switch (screen) {
            case "home_screen": 
                setScreen("tutorial_screen")
            case "tutorial_screen": 
                return <TutorialScreen setScreen={setScreen}/>;
            case "mode_selection":
                return <ModeSelectionScreen setScreen={setScreen} />;
            case "game_screen":
                return <GameScreen />;
        }
    };

    
    return(
        <main id="game-container">
            <div id="game-bg">
                <img src={bg} alt="home background" />
            </div>
            <div>
                {renderScreen()}
            </div>

        </main>
    )
}