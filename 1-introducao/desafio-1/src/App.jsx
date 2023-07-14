import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Primeiro Desafio</h1>
        <h2>Desafio Concluído com
          <span className='green-color'>
            &nbsp;Sucesso
          </span>!
        </h2>
      </div>
    </>
  )
}

export default App
