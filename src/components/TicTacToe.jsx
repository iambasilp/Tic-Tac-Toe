const TicTacToe = () => {
  return (
    <div className="tic-wrapper">
      <div className="tic-content">
        <h1 className="tic-heading">Tic Tac Toe</h1>
        <p className="tic-description">
          Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil
          game for two players who take turns marking the spaces in a
          three-by-three grid with X or O. The player who succeeds in placing
          three of their marks in a horizontal, vertical, or diagonal row is the
          winner.
        </p>
      </div>
      <div className="tic-box">
        <div className="box box-1">X</div>
        <div className="box box-2"></div>
        <div className="box box-3"></div>
        <div className="box box-4"></div>
        <div className="box box-5"></div>
        <div className="box box-6">O</div>
        <div className="box box-7"></div>
        <div className="box box-8"></div>
        <div className="box box-9"></div>
      </div>
      <div className="tic-info">
        <div className="player1">Player 1 : X</div>
        <div className="player2">Player 2 : O</div>
      </div>
    </div>
  );
};

export default TicTacToe;
