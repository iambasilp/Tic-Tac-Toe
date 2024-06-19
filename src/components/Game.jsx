import Board from "./Board";

const Game = () => {
  return (
    <div className="game-wrapper">
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
      <Board />
    </div>
  );
};

export default Game;
