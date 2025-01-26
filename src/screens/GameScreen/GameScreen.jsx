import "./GameScreen.css";
import { useState, useEffect, useRef } from "react";

import data from "../../assets/data.json"

export default function GameScreen({ mode, setScreen }) {
  const [lives, setLives] = useState(3);
  const [trashItems, setTrashItems] = useState(null); 
  const [currentTrash, setCurrentTrash] = useState(null); 
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60); 
  const [bin, setBin] = useState("null");

  const trashItemsRef = useRef();

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
    const currentItems = items || trashItemsRef.current;
    if (!currentItems || currentItems.length === 0) return;

    let randIndex;

    do {
      randIndex = Math.floor(Math.random() * currentItems.length);
    } while (currentItems[randIndex] === null);


    const updatedTrashItems = currentItems.map((item, index) => 
      index === randIndex ? null : item
    );

    setCurrentTrash(currentItems[randIndex]);
    setTrashItems(updatedTrashItems);
    trashItemsRef.current = updatedTrashItems;
  }


  useEffect(() => {
    randomizeItems()
  }, [])


  useEffect(() => {
    const handleKeyDown = (event) => {
      randomizeCurrentItem(trashItems)
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
      setBin(bin)
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="game-screen">
      <div>
        <p>{bin}</p>
        <div className="trash-item">
          <img src={currentTrash ? currentTrash.url : ""} alt="currentTrash" />
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
