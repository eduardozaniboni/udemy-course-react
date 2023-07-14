import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const users = [
    {
      id: 1,
      name: 'Alfredo',
      age: 16,
      role: 'Student'
    },
    {
      id: 2,
      name: 'Bruno',
      age: 17,
      role: 'Student'
    },
    {
      id: 3,
      name: 'Carlos',
      age: 18,
      role: 'Computer Scientist'
    },
    {
      id: 4,
      name: 'Daniel',
      age: 19,
      role: 'Dentist'
    },
    {
      id: 5,
      name: 'Evaldo',
      age: 20,
      role: 'Engineer'
    }
  ]

  return (
    <>
      <div>
        {users.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            role={user.role}
          />
        ))}
      </div>
    </>
  )
}

export default App
