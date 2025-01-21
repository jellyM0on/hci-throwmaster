import volumeBtn from "../../assets/volume.png"
import pauseBtn from "../../assets/pause.png"
import "./Layout.css"

import { Outlet, useLocation } from "react-router";

export default function Layout({screen}){
    console.log(screen)
    return(
        <>
            <header>
                <button><img src={volumeBtn} alt="" /></button>
                {screen == "game_screen" ? 
                       <button><img src={pauseBtn} alt="" /></button> :
                       null
                }
             
            </header>
            <Outlet/>
            <footer>
                {screen == "game_screen" ? <button><img src={volumeBtn} alt="" /></button> : null}
            </footer>
        </>
    )
}