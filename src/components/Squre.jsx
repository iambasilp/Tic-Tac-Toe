

const Squre = ({clickHandle,value}) => {
  return (
    <div className="grid">
      <button onClick={clickHandle}>{value}</button>
    </div>
  )
}

export default Squre
