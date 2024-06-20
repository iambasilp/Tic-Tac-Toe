import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./calculateWinner";

// overite we can not do when click


const Game = () => {
  const [board,setBoard] = useState([null,null,null,null,null,null,null,null,null])
  const [flag,setflag] = useState(true)
  let winner = calculateWinner(board)
  function handleClick(index){
    let boardcopy = [...board]
    if(boardcopy[index] || winner){
      return
    }
    boardcopy[index] = flag?"X":"O";
    // if(winner || boardcopy[index])
    setBoard(boardcopy)
    setflag(!flag)
  }
  return (
    <div className="game">
      <div className="game-content">
        <h1 className="game">Tic Tac Toe</h1>
        <p>
          Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil
          game for two players who take turns marking the spaces in a
          three-by-three grid with X or O. The player who succeeds in placing
          three of their marks in a horizontal, vertical, or diagonal row is the
          winner
        </p>
      </div>
     <Board squres={board} onClick={handleClick} />
     <p className="info">{winner ? "Winner" + " " +  winner : "Next Player :" + " " + (flag ? "X" : "O") }</p>
    </div>
  );
};

export default Game;
