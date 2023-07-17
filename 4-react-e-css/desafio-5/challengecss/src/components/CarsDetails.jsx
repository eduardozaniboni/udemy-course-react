import styles from './CarsDetails.module.css'

const CarsDetails = ({ brand, model, plate, value }) => {

  return (
    <div className={styles.card}>
      <h2>{brand}</h2>
      <div className={styles.card_details}>
        <p>Modelo: {model}</p>
        <p>Placa: {plate}</p>
        <p>Valor: {value}</p>
      </div>
    </div>
  )
}

export default CarsDetails