import Squre from "./Squre";

const Board = () => {
  return (
    <div>
      <Squre value="1" clickHandle={() => onclick("sample value")} />
      <Squre value="2" clickHandle={() => onclick("sample value")} />
      <Squre value="3" clickHandle={() => onclick("sample value")} />
      <Squre value="4" clickHandle={() => onclick("sample value")} />
      <Squre value="5" clickHandle={() => onclick("sample value")} />
      <Squre value="6" clickHandle={() => onclick("sample value")} />
      <Squre value="7" clickHandle={() => onclick("sample value")} />
      <Squre value="8" clickHandle={() => onclick("sample value")} />
      <Squre value="9" clickHandle={() => onclick("sample value")} />
    </div>
  );
};

export default Board;
