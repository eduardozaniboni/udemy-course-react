import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const n = 15
  const [name] = useState('Eduardo')

  const redTitle = true

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>Este elemento foi estilizado de forma inline</p>

      {/* Inline CSS Dinâmico */}
      <h2 style={n < 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>CSS Dinâmico</h2>

      <h2 style={name === 'Eduardo' ? ({ color: 'blue', backgroundColor: 'white' }) : (null)}>CSS Dinâmico</h2>

      {/* CSS em Classes Dinâmicas */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </>
  )
}

export default App
