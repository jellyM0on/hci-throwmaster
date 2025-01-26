import "./GameScreen.css";
import { useState, useEffect, useRef } from "react";

import playClick from "../../utils/playClick";
import playCorrect from "../../utils/playCorrect";
import playWrong from "../../utils/playWrong";

import PauseMenu from "../../components/PauseMenu/PauseMenu";

import data from "../../assets/data.json"
import compostableBin from "../../assets/bins/bin_compostable.png"
import hazardousBin from "../../assets/bins/bin_hazardous.png"
import recyclableBin from "../../assets/bins/bin_recyclable.png"
import residualBin from "../../assets/bins/bin_residual.png"

import heart from "../../assets/heart.png"
import scoreBg from "../../assets/paper3.png"
import pauseBtn from "../../assets/pause.png"
import resumeBtn from "../../assets/resume.png"

export default function GameScreen({ mode, screen, setScreen }) {
  const [pause, setPause] = useState(false);
  const [lives, setLives] = useState(mode == "easy" ? 5 : 3);
  const [trashItems, setTrashItems] = useState(null); 
  const [currentTrash, setCurrentTrash] = useState(null); 
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60); 
  const [bin, setBin] = useState(null);
  const [reset, setReset] = useState(false); 

  const livesRef = useRef(lives); 
  const scoreRef = useRef(score); 
  const timeRef = useRef(time); 
  const trashItemsRef = useRef();
  const currentTrashRef = useRef(currentTrash);

  const randomizeItems = () => {
    const objects = data.objects; 
    const items = []; 

    for (let i=0; i<30; i++){
      const randIndex = Math.floor(Math.random() * objects.length)
      items.push(objects[randIndex])
    }

    setTrashItems(items)
    trashItemsRef.current = items;
    randomizeCurrentItem(items);
  }

  const randomizeCurrentItem = (items) => {
    const currentItems = trashItemsRef.current;
    if (!currentItems || currentItems.every((item) => item === null)) return;

    let randIndex;

    do {
      randIndex = Math.floor(Math.random() * currentItems.length);
    } while (currentItems[randIndex] === null);


    const updatedTrashItems = currentItems.map((item, index) => 
      index === randIndex ? null : item
    );

    setCurrentTrash(currentItems[randIndex]);
    currentTrashRef.current = currentItems[randIndex];
    setTrashItems(updatedTrashItems);
    trashItemsRef.current = updatedTrashItems;
  }

  const transitionToResult = () => {
    sessionStorage.setItem("mode", mode); 
    setScreen("result_screen"); 
  }

  const updateScore = (currentTrash, bin) => {
    if(currentTrash.bin == bin){
      playCorrect();
      setScore((prevScore) => prevScore + 100);
    } else {
      playWrong(); 
      if(livesRef.current == 0){
        transitionToResult(); 
      } else {
        setLives((prevLives) => prevLives - 1);
      }
    }

    if(trashItemsRef.current.every((item) => item === null)){
      transitionToResult(); 
    }
  }

  const formatTime = (time) => {
    const date = new Date(time * 1000);
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();

    if (mm < 10) {mm = "0"+mm}
    if (ss < 10) {ss = "0"+ss}

    return mm+":"+ss;
  }

  const handlePause = () => {
    playClick();
    if(!pause){
      setPause(true); 
    } else { 
      setPause(false); 
    }
  }

  useEffect(() => {
    sessionStorage.clear
    randomizeItems()
  }, [])

  useEffect(() => {
    livesRef.current = lives;
    sessionStorage.setItem("lives", livesRef.current);
  }, [lives]);

  useEffect(() => {
    sessionStorage.setItem("score", score);
  }, [score])


  useEffect(() => {
    if(pause){
      console.log('paused')
      return;
    }

    const handleKeyDown = (event) => {
      let bin; 
      switch (event.key) {
        case 'ArrowUp':
          bin = "compostable"
          break;
        case 'ArrowDown':
          bin = "recyclable"
          break;
        case 'ArrowLeft':
          bin = "residual"
          break;
        case 'ArrowRight':
          bin = "hazardous"
          break;
      }

      if(bin){
        setBin(bin)
        updateScore(currentTrashRef.current, bin); 
        randomizeCurrentItem(trashItems)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pause]);

  useEffect(() => {
    if(mode == "easy" || pause) return

    if (time <= 0) {
      transitionToResult();
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
      sessionStorage.setItem("time", formatTime(time-1));

    }, 1000);

    return () => clearInterval(timerId);
  }, [time, pause]);


  useEffect(() => {
    if(!reset) return 

    setPause(false);
    setLives(mode == "easy" ? 5 : 3); 
    setTrashItems(null)
    setCurrentTrash(null)
    setScore(0)
    setTime(60)
    setBin(null)
    setReset(false)

    randomizeItems();
    
  }, [reset])

  return (
    <div id="game-screen">
      {pause ? <PauseMenu setPause={setPause} setReset={setReset} setScreen={setScreen}/> : null}
      <div className="score-container">
        <img src={scoreBg} alt="" />
        <h2>{score}</h2>
      </div>

      <div className="lives-container">
        {mode == "competitive" ? <h2 className={time < 5 ? "highlight-time": null}>{formatTime(time)}</h2> : null}
        {Array.from({ length: lives }).map((_, index) => (
          <img key={index} src={heart} alt="heart"/>
        ))}
      </div>

       <div className="grid-container-3">
        <div className="grid-row-3">
          <div className="grid-cell"></div>
          <div className="grid-cell">
            <img className="bin-image" src={compostableBin} alt="compostable" />
          </div>
          <div className="grid-cell"></div>
        </div>
        <div className="grid-row-3">
          <div className="grid-cell">
            <img className="bin-image" src={residualBin} alt="compostable" />
          </div>
          <div className="grid-cell current-trash-container">
            <img className="bin-image" src={currentTrash ? currentTrash.url : null} alt="compostable" />
          </div>
          <div className="grid-cell">
            <img className="bin-image" src={hazardousBin} alt="compostable" />
          </div>
        </div>
        <div className="grid-row-3">
          <div className="grid-cell"></div>
          <div className="grid-cell">
           <img className="bin-image" src={recyclableBin} alt="compostable" />
          </div>
          <div className="grid-cell"></div>
        </div>
      </div>
     
      <div className="grid-container">
        {trashItems ? (
          [...Array(3)].map((_, rowIndex) => (
            <div className="grid-row" key={rowIndex}>
              {trashItems
                .slice(rowIndex * 10, rowIndex * 10 + 10)
                .map((item, colIndex) => (
                  <div className="grid-cell" key={colIndex}>
                    {item ? (
                      <img
                        src={item.url}
                        alt={`Trash item ${rowIndex * 10 + colIndex + 1}`}
                        className="trash-image"
                      />
                    ) : (
                      <div className="empty-cell"></div>
                    )}
                  </div>
                ))}
            </div>
          ))
        ) : (
          <p className="loading-message">Loading trash items...</p>
        )}
      </div>

      <footer>
        <button id="pause-btn" onClick={handlePause}><img src={pause ? resumeBtn : pauseBtn} alt="pause" /></button>
      </footer>
    </div>
  );
}
