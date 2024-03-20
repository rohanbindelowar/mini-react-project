import React, { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onCLick }) {
  return (
    <button onClick={onCLick} className="cell">
      {value}
    </button>
  );
}
export const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXTurn] = useState(true);
  const [status , setStatus] = useState('');

  console.log(squares);

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (squares[x] && squares[x] == squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(()=>{
    if(!getWinner(squares) && squares.every((item)=> item!=='')){
        setStatus('This is a draw.. Restart the game!')
    } 
    else if(getWinner(squares)){
        setStatus(`Winner is ${getWinner(squares)}. Restart the game`)
    }
    else{
        setStatus(`Next Player is ${isXturn?"X":"O"}`)
    }
  },[squares,isXturn])

  function handleOnClick(getIndex) {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getIndex]) return;
    copySquares[getIndex] = isXturn ? "X" : "O";
    setIsXTurn(!isXturn);
    setSquares(copySquares);
  }

  function handleRestart(){
    setIsXTurn(true);
    setSquares(Array(9).fill(''))
  }
  return (
    <div className="container">
      <div className="tictactoe-container">
        <div className="row">
          <Square value={squares[0]} onCLick={() => handleOnClick(0)} />
          <Square value={squares[1]} onCLick={() => handleOnClick(1)} />
          <Square value={squares[2]} onCLick={() => handleOnClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onCLick={() => handleOnClick(3)} />
          <Square value={squares[4]} onCLick={() => handleOnClick(4)} />
          <Square value={squares[5]} onCLick={() => handleOnClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onCLick={() => handleOnClick(6)} />
          <Square value={squares[7]} onCLick={() => handleOnClick(7)} />
          <Square value={squares[8]} onCLick={() => handleOnClick(8)} />
        </div>

       
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
export default TicTacToe;
