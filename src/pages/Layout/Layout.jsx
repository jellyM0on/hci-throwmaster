import volumeBtn from "../../assets/volume.png"
import pauseBtn from "../../assets/pause.png"
import homeBtn from "../../assets/home.png"
import "./Layout.css"

import { Outlet, useNavigate } from "react-router";

export default function Layout({screen, setScreen}){
    const navigate = useNavigate();
    return(
        <>
            <header>
                <button onClick={() => {
                    setScreen("home_screen")
                    navigate("/") 
                    }}>
                    <img src={homeBtn} alt="home" />
                </button> 
                <button><img src={volumeBtn} alt="volume" /></button>
            </header>
            <Outlet/>
            <footer>
                {screen == "game_screen_easy" || screen=="game_screen_competitive" ? <button id="pause-btn"><img src={pauseBtn} alt="pause" /></button> : null}
            </footer>
        </>
    )
}