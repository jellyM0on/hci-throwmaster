import bg from "../../assets/paper4.png"
import "./PauseMenu.css"

import { useNavigate } from "react-router";

export default function PauseMenu({setPause, setScreen, setReset}){
    const handleResume = () => {
        setPause(false)
    }

    const handleRestart = () => {
        setReset(true)
    }

    const handleChangeMode = () => {
        setScreen("mode_selection")
    }

    const handleTutorial = () => {
        setScreen("tutorial_screen")
    }

    const navigate = useNavigate();
    const handleQuit = () => {
        navigate("/") 
    }
    return(
        <div id="pause-menu-container">
          <img src={bg} alt="bg" className="pause-menu-bg"/>
          <div className="pause-menu-container-content">
            <button onClick={handleResume}>Resume</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleChangeMode}>Change Mode</button>
            <button onClick={handleTutorial}>How to Play?</button>
            <button onClick={handleQuit} className="quit-button">QUIT</button>
          </div>
        </div>
    )
}