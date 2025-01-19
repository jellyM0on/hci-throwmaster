import { useEffect, useState } from "react"
import bg from "../../assets/bg.png"
import "./Game.css"

import ModeSelectionScreen from "../../components/ModeSelectionScreen/ModeSelectionScreen";
import GameScreen from "../../components/GameScreen/GameScreen";

export default function Game({screen, setScreen}){
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