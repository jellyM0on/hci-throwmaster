import "./ModeSelectionScreen.css"

export default function ModeSelectionScreen({setScreen}) {
    return(
        <div id="mode-selection">
            <div>Choose a Mode</div>
            <div>
                <button onClick={() => setScreen("game_screen")}>Easy</button>
                <button>Competitive</button>
            </div>
        </div>
    )
}