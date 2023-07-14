import { useState } from "react"

const CondicionalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState('Eduardo')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}

      <h1>If Ternário</h1>
      {name === 'Eduardo' ? (
        <div>
          <p>O nome é Eduardo!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName('Gabriela')}>Clica aqui!</button>
    </div>
  )
}

export default CondicionalRender