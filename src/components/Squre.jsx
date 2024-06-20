import React from 'react'

const Squre = ({onClick,value}) => {
  return (
    <div className='game-squre' onClick={onClick}>
      {value}
    </div>
  )
}

export default Squre
