import Squre from "./Squre";

const Board = () => {
 
  return (
    <div className="grid-wrappper">
      <Squre value="1" clickHandle={()=>alert("hello")} />
      <Squre value="2" clickHandle={()=>alert("hello")} />
      <Squre value="3" clickHandle={()=>alert("hello")} />
      <Squre value="4" clickHandle={()=>alert("hello")} />
      <Squre value="5" clickHandle={()=>alert("hello")} />
      <Squre value="6" clickHandle={()=>alert("hello")} />
      <Squre value="7" clickHandle={()=>alert("hello")} />
      <Squre value="8" clickHandle={()=>alert("hello")} />
      <Squre value="9" clickHandle={()=>alert("hello")} />
    </div>
  );
};

export default Board;
