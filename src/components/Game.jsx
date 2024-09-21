import React, { useState } from 'react';
import './Game.css';
import icon1 from './assets/circle.png';
import icon2 from './assets/cut.png';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles


function Game() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
  const [scoreX, setScoreX] = useState(0);  
  const [scoreO, setScoreO] = useState(0);  

  
  const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];

  const toggle = (num) => {
    if (lock || data[num]) {
      return; 
    }

    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = 'x';  
    } else {
      newData[num] = 'o';  
    }

    setData(newData);
    setCount(count + 1);

    checkWinner(newData);  
  };

  
  const checkWinner = (newData) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        setLock(true);  

        if (newData[a] === 'x') {
          setScoreX(scoreX + 1);  
          toast.success('Player X wins!', { position: 'top-center' });
        } else {
          setScoreO(scoreO + 1);  
          toast.success('Player O wins!', { position: 'top-center' });
        }
        return;
      }
    }

    
    if (!newData.includes('')) {
      setLock(true);
      toast.info('It\'s a draw!', { position: 'top-center' }); 
    }
  };

  const resetGame = () => {
    setData(['', '', '', '', '', '', '', '', '']);  
    setCount(0);  
    setLock(false);
    // setScoreX(0)  
    // setScoreO(0)  
  };

  return (
    <div className='container'>
      {}
      <div className="score-board">
        <h2>Player X: {scoreX}</h2>
        <h2>Player O: {scoreO}</h2>
      </div>

      <div className="game-board my-2">
        <div className="row1">
          <div className="boxes" onClick={() => toggle(0)}>
            {data[0] && <img src={data[0] === 'x' ? icon2 : icon1} alt={data[0]} />}
          </div>
          <div className="boxes" onClick={() => toggle(1)}>
            {data[1] && <img src={data[1] === 'x' ? icon2 : icon1} alt={data[1]} />}
          </div>
          <div className="boxes" onClick={() => toggle(2)}>
            {data[2] && <img src={data[2] === 'x' ? icon2 : icon1} alt={data[2]} />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={() => toggle(3)}>
            {data[3] && <img src={data[3] === 'x' ? icon2 : icon1} alt={data[3]} />}
          </div>
          <div className="boxes" onClick={() => toggle(4)}>
            {data[4] && <img src={data[4] === 'x' ? icon2 : icon1} alt={data[4]} />}
          </div>
          <div className="boxes" onClick={() => toggle(5)}>
            {data[5] && <img src={data[5] === 'x' ? icon2 : icon1} alt={data[5]} />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}>
            {data[6] && <img src={data[6] === 'x' ? icon2 : icon1} alt={data[6]} />}
          </div>
          <div className="boxes" onClick={() => toggle(7)}>
            {data[7] && <img src={data[7] === 'x' ? icon2 : icon1} alt={data[7]} />}
          </div>
          <div className="boxes" onClick={() => toggle(8)}>
            {data[8] && <img src={data[8] === 'x' ? icon2 : icon1} alt={data[8]} />}
          </div>
        </div>
      </div>
      <div className="resetBtn" onClick={resetGame}>Reset</div>
{/* Toast container for notifications */}
<ToastContainer />
      
       
    </div>
  );
}

export default Game;
