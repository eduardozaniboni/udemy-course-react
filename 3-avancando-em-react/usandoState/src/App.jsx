import { useState } from 'react'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  // const name = 'Gabriela'
  const [userName] = useState('Eduardo')

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', km: 0, newCar: true },
    { id: 2, brand: 'Fiat', color: 'Branco', km: 10245, newCar: false },
    { id: 3, brand: 'Lamborghini', color: 'Preto', km: 0, newCar: true },
    { id: 4, brand: 'Renault', color: 'Preto', km: 19250, newCar: false }
  ]

  function showMessage() {
    console.log('Evento do componente pai!');
  };

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Utilizando useState</h1>
      <ManageData />
      <ListRender />
      <CondicionalRender />

      {/* props */}
      <h1>Props</h1>
      <ShowUserName name={userName} />

      {/* destructuring */}
      <h1>Desestruturação</h1>
      <CarDetails brand='VW' km={123824} color='Preto' newCar={false} />

      {/* reaproveitamento */}
      <h1>Reaproveitamento de Componente</h1>
      <CarDetails brand='Ford' color='Vermelho' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='Branco' km={4500} newCar={false} />

      {/* loop em array de objetos */}
      <h1>Loop em Array de Objetos</h1>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment Component */}
      <Fragment propFragment={'Teste'} />

      {/* Children */}
      <Container myProp='testing'>
        <p>Esse é o conteúdo do Container</p>
      </Container>
      <Container myProp='testing 2'>
        <h5>Esse é o conteúdo do Container 2</h5>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  )
}

export default App
