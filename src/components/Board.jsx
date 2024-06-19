import { useState } from "react";
import Squre from "./Squre";

const Board = ({squres,onClick}) => {
  console.log(squres);
 
  return (
    <div className="grid-wrappper">
    {squres.map((squre,index)=>{
      return <Squre value={squre} key={index} onClick={()=> onClick(index)} />
    })}
    </div>
  );
};

export default Board;

// here i got issue i have solved got bit time more that is map is defnitly need to return something hahahah...
