import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./calculateWinner";

// overite we can not do when click

const Game = () => {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [flag, setflag] = useState(true);
  let winner = calculateWinner(board);
  const [player1,setPlayer1] = useState(["🍎", "🚗", "🌹"]);
  const [player2,setPlayer2] = useState(["🍌", "🐝", "🐥"]);

  function handleplayer(e){
     let value = e.target.value
     let newArray =  player1.filter((item,i)=>{
        return item[i] === value
     })
     console.log(newArray);
  }

  function handleClick(index) {
    let boardcopy = [...board];
    if (boardcopy[index] || winner) return;
   
     boardcopy[index] = flag ? player1 : player2;
    setBoard(boardcopy);
    setflag(!flag);
  }
  let isDraw = board.every((item) => item != null);


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
        <div className="select-choose">
          <select name="" id="" className="select-chooseFirst" onChange={handleplayer}>
            {player1.map((item, index) => {
              return <option key={index} value={item}>{item}</option>;
            })}
          </select>
          <select name="" id="" className="select-chooseSecond" onChange={handleplayer}>
            {player2.map((item, index) => {
              return <option key={index} value={item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
      <Board squres={board} onClick={handleClick} />
      <div className="info">
        <p className="player">
          {winner
            ? "Winner" + " " + winner
            : isDraw
            ? "Draw"
            : "Next Player :" + " " + (flag ? "X" : "O")}
        </p>
        <p
          onClick={() => {
            setBoard([null, null, null, null, null, null, null, null, null]);
          }}
          className="reset"
        >
          Rest
        </p>
      </div>
    </div>
  );
};

export default Game;
