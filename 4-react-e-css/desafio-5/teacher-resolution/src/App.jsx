import './App.css'
import Car from './components/Car'

function App() {

  const cars = [
    { id: 1, brand: 'Fiat', model: 'Uno', plate: '123ABC' },
    { id: 2, brand: 'Hyundai', model: 'HB20', plate: 'ABC123' },
    { id: 3, brand: 'Volkswagen', model: 'Gol', plate: '1A2B3C' },
    { id: 4, brand: 'Lamborghini', model: 'Aventador', plate: 'A1B2C3' },
    { id: 5, brand: 'Ferrari', model: 'F430', plate: 'AB123C' }
  ]

  return (
    <>
      <h1>Showroom de Carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </>
  )
}

export default App
