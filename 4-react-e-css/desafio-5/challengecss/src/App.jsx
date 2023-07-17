import { useState } from 'react'
import './App.css'
import CarsDetails from './components/CarsDetails'

function App() {

  const cars = [
    { id: 1, brand: 'Fiat', model: 'Uno', plate: '123ABC', value: 10000 },
    { id: 2, brand: 'Hyundai', model: 'HB20', plate: 'ABC123', value: 10000 },
    { id: 3, brand: 'Volkswagen', model: 'Gol', plate: '1A2B3C', value: 10000 },
    { id: 4, brand: 'Lamborghini', model: 'Aventador', plate: 'A1B2C3', value: 10000 },
    { id: 5, brand: 'Ferrari', model: 'F430', plate: 'AB123C', value: 10000 }
  ]

  return (

    <>
      <div>
        {cars.map((car) => (
          <CarsDetails
            key={car.id}
            brand={car.brand}
            model={car.model}
            plate={car.plate}
            value={car.value}
          />
        ))}
      </div>
    </>
  )
}

export default App
