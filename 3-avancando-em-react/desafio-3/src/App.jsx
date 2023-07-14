import { useState } from 'react'
import Image2 from "./assets/image2.jpg"
import './App.css'
import ManagerData from './components/ManagerData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando no React</h1>

      {/* Imagem em public */}
      {/* Quando a imagem está em public, eu posso acessar ela diretamente pela barra */}
      <div>
        <img src="/image1.jpg" alt="Imagem 1" />
      </div>

      {/* Imagem em assets */}
      {/* Quando a imagem está dentro da pasta src/assets, deve ser importada antes de utilizar */}
      <div>
        <img src={Image2} alt="Imagem 2" />
      </div>

      <ManagerData />
    </>
  )
}

export default App
