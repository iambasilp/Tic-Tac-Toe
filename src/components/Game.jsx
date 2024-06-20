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
  console.log(board)
  const [player1, setPlayer1] = useState(["🍎", "🚗", "🌹"]);
  const [dataOne, setDataOne] = useState(null);
  const [dataTwo, setDataTwo] = useState(null);
  const [player2, setPlayer2] = useState(["🍌", "🐝", "🐥"]);
  console.log(dataOne);

  function handleplayerOne(e) {
    let value = e.target.value;
    setDataOne(value);
  }
  function handleplayerTwo(e) {
    let value = e.target.value;
    setDataTwo(value);
  }

  function handleClick(index) {
    let boardcopy = [...board];
    if (boardcopy[index] || winner) return;

    boardcopy[index] = flag ? dataOne : dataTwo;
    console.log(boardcopy[index]);
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
          <select
            name=""
            id=""
            className="select-chooseFirst"
            onChange={handleplayerOne}
          >
            <option value="">Player 1</option>
            {player1.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          
          </select>
          <select
            name=""
            id=""
            className="select-chooseSecond"
            onChange={handleplayerTwo}
          >
            <option value="">Player 2</option>
            {player2.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Board squres={board} onClick={handleClick} winner={winner} isDraw={isDraw} flag={flag} dataOne={dataOne} dataTwo={dataTwo}/>
      <div className="info">
        <p className="player">
          {winner
            ? "Winner" + " " + winner
            : isDraw
            ? "Draw"
            : "Next Player :" + " " + (flag ? dataOne  : dataTwo)}
        </p>
        <a
          onClick={() => {
            setBoard([null, null, null, null, null, null, null, null, null]);
          }}
          className="reset"
        >
          Reset
        </a>
        
      </div>
    </div>
  );
};
// pointer when hover reset button

export default Game;
