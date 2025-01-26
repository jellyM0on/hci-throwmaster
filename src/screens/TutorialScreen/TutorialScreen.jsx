import "./TutorialScreen.css"
import InfoContainer from "../../components/InfoContainer/InfoContainer"
import playClick from "../../utils/playClick";

import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function TutorialScreen({setScreen}) {

    const transitionToModeSelection = () => {
        playClick()
        setScreen("mode_selection");
    }

    const Content = () => {
        return(
            <div>
                <p>Do you know where your trash belongs? 
                    It’s time to put your skills to the test! 
                    Your goal is to classify each piece of trash into the correct category as quickly and accurately as possible.
                </p>
                <ul>
                    <li>A piece of trash will appear on the screen</li>
                    <li>Use your arrow keys to classify them into the right bin</li>
                </ul>

                <div className="tutorial-details-container">
                    <div className="tutorial-details-col">
                        <div className="grouped-container">
                           <FaArrowAltCircleUp size="2.5em" color="rgb(88, 160, 116)"/>
                            <p>Biodegradable or compostable</p>
                        </div>
                        <div className="grouped-container">
                            <FaArrowAltCircleDown size="2.5em" color="rgb(40, 104, 214)"/>
                            <p>Recyclable</p>
                        </div>
                    </div>
                    <div className="tutorial-details-col">
                        <div className="grouped-container">
                            <FaArrowAltCircleLeft size="2.5em" color="rgb(35, 32, 32)"/>
                            <p>Non-biodegradable or residual</p>
                        </div>
                            <div className="grouped-container">
                            <FaArrowAltCircleRight size="2.5em" color="rgb(224, 61, 58)"/>
                            <p>Hazardous or toxic</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Nav = () => {
        return(
            <div>
                <button className="btn-plain" onClick={transitionToModeSelection}>Select Game Mode -&gt;</button>
            </div>
        )
    }

    return(
        <div id="tutorial-screen">
              <InfoContainer title={"How to Play?"} content={<Content/>} navBtns={<Nav/>} navType="single"/>
        </div>
    )
}