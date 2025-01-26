import volumeBtn from "../../assets/volume.png"
import silentBtn from "../../assets/silent.png"
import homeBtn from "../../assets/home.png"
import "./Layout.css"

import playClick from "../../utils/playClick";
import { playBg, stopBg } from "../../utils/playBg";
import { playGameBg, stopGameBg } from "../../utils/playGameBg";

import { Outlet, useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function Layout({screen, setScreen}){
    const [volume, setVolume] = useState(true);

    useEffect(() => {
        if(!volume){
            stopBg();
            stopGameBg();
        }
    })

    const handleVolume = () => {
        playClick()
        if(volume){
            setVolume(false)
        } else {
            setVolume(true)
            if(screen == "game_screen_easy"){
                playGameBg("easy")
            } else if(screen == "game_screen_competitive"){
                playGameBg("competitive")
            } else {
                playBg(); 
            }
        }
    }

    const navigate = useNavigate();
    return(
        <>
            <header>
                <button onClick={() => {
                    playClick();
                    setScreen("home_screen")
                    navigate("/") 
                    }}>
                    <img src={homeBtn} alt="home" />
                </button> 
                <button onClick={handleVolume}><img src={volume ? volumeBtn : silentBtn} alt="volume" /></button>
            </header>
            <Outlet/>
        </>
    )
}