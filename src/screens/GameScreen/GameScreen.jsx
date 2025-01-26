import "./GameScreen.css";
import { useState, useEffect, useRef } from "react";

import data from "../../assets/data.json"
import compostableBin from "../../assets/bins/bin_compostable.png"
import hazardousBin from "../../assets/bins/bin_hazardous.png"
import recyclableBin from "../../assets/bins/bin_recyclable.png"
import residualBin from "../../assets/bins/bin_residual.png"

import heart from "../../assets/heart.png"
import scoreBg from "../../assets/paper3.png"

export default function GameScreen({ mode, setScreen }) {
  const [lives, setLives] = useState(3);
  const [trashItems, setTrashItems] = useState(null); 
  const [currentTrash, setCurrentTrash] = useState(null); 
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60); 
  const [bin, setBin] = useState(null);

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
    if (!currentItems || currentItems.length === 0) return;

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

  const updateScore = (currentTrash, bin) => {
    console.log(currentTrash)
    console.log(bin)
    if(currentTrash.bin == bin){
      setScore((prevScore) => prevScore + 100);
    } else {
      setLives((prevLives) => prevLives - 1);
    }
  }


  useEffect(() => {
    randomizeItems()
  }, [])


  useEffect(() => {
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
  }, []);

  return (
    <div id="game-screen">

      <div className="score-container">
        <img src={scoreBg} alt="" />
        <h2>{score}</h2>
      </div>

      <div className="lives-container">
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

    </div>
  );
}
