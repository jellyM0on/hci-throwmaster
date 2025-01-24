import "./TutorialScreen.css"
import bg from "../../assets/paper1.png"
import upBtn from "../../assets/tutorial/up.png"
import downBtn from "../../assets/tutorial/down.png"
import leftBtn from "../../assets/tutorial/left.png"
import rightBtn from "../../assets/tutorial/right.png"

export default function TutorialScreen({setScreen}) {

    const transitionToModeSelection = () => {
        setScreen("mode_selection");
    }

    return(
        <div id="tutorial-screen">
            <div id="tutorial-container">
                <img src={bg} alt="bg" id="tutorial-bg"/>
                <div id="tutorial-content">
                    <h2>HOW TO PLAY?</h2>
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
                                    <img src={upBtn} alt="" className="tutorial-assets" />
                                    <p>Biodegradable or compostable waste</p>
                                </div>
                                <div className="grouped-container">
                                    <img src={rightBtn} alt="" className="tutorial-assets" />
                                    <p>Recyclable waste</p>
                                </div>
                            </div>
                            <div className="tutorial-details-col">
                                <div className="grouped-container">
                                    <img src={downBtn} alt="" className="tutorial-assets" />
                                    <p>Non-biodegradable or residual waste</p>
                                </div>
                                <div className="grouped-container">
                                    <img src={leftBtn} alt="" className="tutorial-assets" />
                                    <p>Hazardous or toxic waste</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tutorial-next-btn">
                        <button className="btn-plain" onClick={transitionToModeSelection}>Select Game Mode -&gt;</button>
                    </div>
                </div>

               
            </div>

           
        </div>
    )
}