import { useState } from "react"

const ManageData = () => {

  let semUseState = 10

  console.log(semUseState)

  const [number, setNumber] = useState(10)

  return (
    <div>
      <div>
        <h1>Sem useState</h1>
        <div>Valor: {semUseState}</div>
        <button onClick={() => semUseState = 15}>Sem useState</button>
      </div>
      <div>
        <h1>Com useState</h1>
        <div>Valor: {number}</div>
        <button onClick={() => setNumber(15)}>Com useState</button>
      </div>
    </div>
  )
}

export default ManageData