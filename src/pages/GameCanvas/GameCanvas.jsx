import { useEffect, useState } from "react"
import bg from "../../assets/bg.png"
import "./GameCanvas.css"

import ModeSelectionScreen from "../../screens/ModeSelectionScreen/ModeSelectionScreen";
import GameScreen from "../../screens/GameScreen/GameScreen";
import TutorialScreen from "../../screens/TutorialScreen/TutorialScreen";
import FinishScoreScreen from "../../screens/FinishScoreScreen/FinishScoreScreen";

import { playBg, stopBg } from "../../utils/playBg";
import { playGameBg, stopGameBg } from "../../utils/playGameBg";

export default function GameCanvas({screen, setScreen}){
    const [bgOn, setBgOn] = useState(true); 

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
            case "tutorial_screen": 
                return <TutorialScreen setScreen={setScreen}/>;
            case "mode_selection":
                return <ModeSelectionScreen setScreen={setScreen} />;
            case "game_screen_easy":
                return <GameScreen mode="easy" setScreen={setScreen}/>;
            case "game_screen_competitive":
                return <GameScreen mode="competitive" setScreen={setScreen}/>;
            case "result_screen":
                return <FinishScoreScreen setScreen={setScreen}/>
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