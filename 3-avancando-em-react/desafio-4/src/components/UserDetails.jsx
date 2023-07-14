const UserDetails = ({ name, age, role }) => {

  return (
    <div>
      <h2>- {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {role}</p>
      {age >= 18 ? (
        <p>Pode tirar carteira de habilitação.</p>
      ) : (
        <p>Menor de idade.</p>
      )}
    </div>
  )
}

export default UserDetails