
export function calculateWinner(squre){
    console.log(squre);
   const line = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
   for(let i=0 ; i<line.length;i++){
    const [a,b,c] = line[i]
    if(squre[a]&&squre[a] == squre[b]&&squre[a] == squre[c])
       
    return squre[a]
   }
 return null
}

