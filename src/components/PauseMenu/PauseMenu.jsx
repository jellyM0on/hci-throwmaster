import bg from "../../assets/paper4.png"
import "./PauseMenu.css"

import { useNavigate } from "react-router";
import { useState } from "react";

export default function PauseMenu({setPause, setScreen, setReset}){
    const [needsConfirm, setNeedsConfirm] = useState(null)
    const [needsConfirmMsg, setNeedsConfirmMsg] = useState(null); 
    const handleResume = () => {
        setPause(false)
    }

    const handleRestart = () => {
        setNeedsConfirmMsg("restart the game")
        setNeedsConfirm("restart")
    }

    const handleChangeMode = () => {
        setNeedsConfirmMsg("quit and change the game mode")
        setNeedsConfirm("change-mode")
    }

    const handleTutorial = () => {
        setNeedsConfirmMsg("quit and read the tutorial again")
        setNeedsConfirm("tutorial")
    }

    const handleQuit = () => {
        setNeedsConfirmMsg("quit and go back to the home screen")
        setNeedsConfirm("home")
    }

    const handleCancel = () => {
        setNeedsConfirm(null)
        setNeedsConfirmMsg(null)
    }

    const navigate = useNavigate();
    const handleConfirm = () => {
        if(needsConfirm == "change-mode"){
          setScreen("mode_selection")  
        } 

        if(needsConfirm == "tutorial"){
            setScreen("tutorial_screen")
        }

        if(needsConfirm == "home"){
            navigate("/")
        }

        if(needsConfirm == "restart"){
            setReset(true)
        }
    }

    return(
        <div id="pause-menu-container">
          <img src={bg} alt="bg" className="pause-menu-bg"/>
          {needsConfirm ? 
            <div className="pause-menu-container-content">
                <p className="confirm-text">Are you sure you want to {needsConfirmMsg}?</p>
                <div className="confirm-btns">
                    <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                    <button onClick={handleConfirm} className="confirm-btn">Confirm</button>
                </div>
            </div> : 
            <div className="pause-menu-container-content">
                <button onClick={handleResume}>Resume</button>
                <button onClick={handleRestart}>Restart</button>
                <button onClick={handleChangeMode}>Change Mode</button>
                <button onClick={handleTutorial}>How to Play?</button>
                <button onClick={handleQuit} className="quit-button">QUIT</button>
          </div>
          }
          
        </div>
    )
}