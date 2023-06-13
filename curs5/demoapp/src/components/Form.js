
import React, { useState } from 'react'


export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefon, setTelefon] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name} ${email} ${password} ${telefon} `)
      }
  return (
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
   <label>Enter your email:
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </label> 
    <label>Enter your telefon:
      <input 
        type="text" 
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
      />
    </label> 
    <label>Enter your password:
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </label> 
    <input type="submit" />
  </form>
  )
}
