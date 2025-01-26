import "./ModeSelectionScreen.css"
import InfoContainer from "../../components/InfoContainer/InfoContainer"
import { VscTriangleRight } from "react-icons/vsc"
import { VscTriangleLeft } from "react-icons/vsc"

import { useState } from "react"

export default function ModeSelectionScreen({setScreen}) {
    const [mode, setMode] = useState("easy")

    const Content = () => {

        return(
            <div className="mode-selection-content">
                <div className="mode-selection-fields">
                    {mode == "easy" ? 
                        <div className="mode-selection-field">
                            <VscTriangleRight/>
                            <button className="bold">Easy</button>
                            <VscTriangleLeft/>
                        </div> 
                    
                        : 
                        <button onClick={ () => setMode("easy")}>Easy</button>
                    }
                    
                    {mode == "competitive" ? 
                        <div className="mode-selection-field">
                            <VscTriangleRight/>
                            <button className="bold">Competitive</button>
                            <VscTriangleLeft/>
                        </div> 
                        : 
                        <button onClick={() => setMode("competitive")}>Competitive</button>
                    }
                </div>
                
                <p className="mode-selection-description">
                    {mode == "easy" ? "Relaxed and casual gameplay with no timer" : "Fast paced gameplay with a time limit"}
                </p>
            </div>
        )
    }

    const Nav = () => {

        const transitionToTutorial = () => {
            setScreen("tutorial_screen");
        }

        const transitionToGame = () => {
            if(mode == "easy"){
                setScreen("game_screen_easy");
            } else {
                setScreen("game_screen_competitive");
            }
        }

        return(
        <>
            <button onClick={transitionToTutorial} className="btn-plain ">&lt;- How to play?</button>
            <button onClick={transitionToGame} className="btn-plain ready-btn">I'm Ready!</button>
        </>
        )
    }
    return(
        <div id="mode-selection">
           <InfoContainer title={"Select a Game Mode"} content={<Content/>} navBtns={<Nav/>}  navType="multi"/>
        </div>
    )
}