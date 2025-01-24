import "./ModeSelectionScreen.css"
import bg from "../../assets/paper1.png"

export default function ModeSelectionScreen({setScreen}) {
    return(
        <div id="tutorial-screen">
                   <div id="tutorial-container">
                       <img src={bg} alt="bg" id="tutorial-bg"/>
                       <div id="tutorial-content">
                           <h2>SELECT A GAME MODE</h2>
                           <div>
                                <button>Easy</button>
                                <button>Difficult</button>
                            </div>
       
       
                           <div id="tutorial-next-btn">
                            <button>test</button>
                               {/* <button className="btn-plain" onClick={transitionToModeSelection}>Select Game Mode -&gt;</button> */}
                           </div>
                       </div>
       
                      
                   </div>
       
                  
               </div>
    )
}