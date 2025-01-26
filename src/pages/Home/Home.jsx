import "./Home.css"; 
import bg from "../../assets/bg.png"

import playClick from "../../utils/playClick";
import { playBg, stopBg } from "../../utils/playBg";
import { stopGameBg } from "../../utils/playGameBg";

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Home({setScreen}){
    useEffect(() => {
        setScreen("home_screen")
        stopBg(); 
        stopGameBg();
    }, [])
    const navigate = useNavigate()
    
    const transitionToGame = () => {
        playClick(); 
        playBg()
        setScreen("tutorial_screen")
        
        const body = document.body;
        body.style.overflow = "visible"; 

        window.scrollTo({
            top: 0,
            left: 800,
            behavior: "smooth",
        });
       
        setTimeout(() => {
            navigate('/game');
          }, 500); 
    }

    const transitionToAbout = () => {
        playClick(); 
        playBg()
        const body = document.body;
        body.style.overflow = "visible"; 

        window.scrollTo({
            top: 0,
            left: 5000,
            behavior: "smooth",
        });
       
        setTimeout(() => {
            navigate('/about');
          }, 500); 
    }

    return(
        <main id="home-container">
            <div id="home-title-container">
                <h1>THROW <br></br> MASTER</h1>
                <button className="button-1" onClick={transitionToGame}>Start</button>
                <button className="button-2" onClick={transitionToAbout}>About</button>
            </div>
            <div id="home-bg">
                <img src={bg} alt="home background" />
            </div>
        </main>
    )
}