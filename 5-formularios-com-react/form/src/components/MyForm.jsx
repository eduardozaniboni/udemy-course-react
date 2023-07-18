import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
  // 6. Controlled Inputs

  // 3. Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '')

  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.prevetDefault()
    console.log('Enviando o formulário')
    console.log(name, email, bio, role)

    // 7. Limpar formulário
    // validacao...
    // envio...
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  return (
    <div>
      {/* 5. Envio de form */}
      {/* 1. Criação de form */}
      <form onSubmit={handleSubmit}>
        {/* Label e input */}
        <div>
          <label htmlFor='name'>Nome:</label>
          <input type='text' name='name' placeholder='Digite o seu nome' onChange={handleName} value={name} />
        </div>

        {/* 2. Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4. Simplificação de manipulação de state */}
          <input type='email' name='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>

        {/* 8. Textarea */}
        <label htmlFor="">
          <span>Biografia:</span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>

        {/* 9. Select */}
        <label>
          <span>Função</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="admin">Administrador</option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
          </select>
        </label>
        <input type='submit' value='Enviar' />
      </form>
    </div >
  )
}

export default MyForm