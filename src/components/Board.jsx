import Squre from "./Squre"

const Board = ({squres,onClick,winner,isDraw,flag,dataOne,dataTwo}) => {
  return (
    <div className="game-board">
      <div className="pop-up" style={{display:winner || isDraw ? "flex" : "none"}}>
        {winner
            ? "Winner" + " " + winner
            : isDraw
            ? "Draw"
            : "Next Player :" + " " + (flag ? dataOne  : dataTwo)}
        </div>
     {squres.map((squre,index)=>{
     return  <Squre  key={index} value={squre} onClick={()=>{onClick(index)}} />
     })}
    </div>
  )
}

export default Board
