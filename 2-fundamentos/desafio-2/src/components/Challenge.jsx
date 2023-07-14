const Challenge = () => {
  
  const a = 10
  const b = 17

  const handleSumResult = (x, y) => {
    x = a
    y = b

    const result = x + y
    
    console.log(result)
  }

  return (
    <div>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <button onClick={handleSumResult}>Somar números</button>
    </div>
  )
}

export default Challenge