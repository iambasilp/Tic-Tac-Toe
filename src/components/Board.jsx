import Squre from "./Squre"

const Board = ({squres,onClick}) => {
  return (
    <div className="game-board">
     {squres.map((squre,index)=>{
     return  <Squre  key={index} value={squre} onClick={()=>{onClick(index)}} />
     })}
    </div>
  )
}

export default Board
