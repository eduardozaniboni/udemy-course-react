const Container = ({ children, myProp }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <p>O valor é: {myProp}</p>
    </div>
  )
}

export default Container