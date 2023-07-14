import { useState } from 'react'

const ListRender = () => {

  const [list] = useState([
    'Eduardo',
    'Matheus',
    'Pedro',
    'Maria'
  ])

  const [users, setUsers] = useState([
    { id: 1, name: 'Eduardo', age: 22 },
    { id: 2, name: 'João', age: 42 },
    { id: 3, name: 'Pedro', age: 32 },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    console.log(randomNumber);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {/* Má prática */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {/* Boa prática */}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender