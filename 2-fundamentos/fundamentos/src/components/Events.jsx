const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e)

    console.log("Ativou o evento")
  }

  const renderSomething = (x) => {
    if (x) {

      return <h1>Renderizando isso!</h1>

    } else {

      return <h1>Também posso renderizar isso!</h1>

    }
  }

  return (
    <div>
      <div>
        {/* Funções nominadas */}
        <button onClick={handleMyEvent}>CLique aqui!</button>
      </div>

      <div>
        {/* Funções no próprio evento */}
        <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>

        <button onClick={() => {
          if (true) {
            console.log("Isso não deveria existir :)")
          }
        }}>Clique aqui, por favor.</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events