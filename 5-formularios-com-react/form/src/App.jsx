import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{ name: 'Eduardo', email: 'edu@gmail.com', bio: 'Sou um advogado', role: 'editor' }} />
    </>
  )
}

export default App
