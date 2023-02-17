import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
const navigate = useNavigate()
const handleClear = () => {
  localStorage.clear()
navigate("/")
}

  return (
    <div>
      <div><button onClick={handleClear}>Logout</button></div>
      Admin</div>
  )
}

export default Admin