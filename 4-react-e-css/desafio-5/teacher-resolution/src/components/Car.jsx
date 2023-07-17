import styles from './Car.module.css'

const Car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>{car.brand}</h1>
      <p>Modelo: {car.model}</p>
      <p>Placa: {car.plate}</p>
    </div>
  )
}

export default Car