import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {user} from "./confige"


function Formvalidation() {


const [data, setData] = useState({
    username:"",
    password:""
})

const handleSubmit = (e) => {
e.preventDefault()
console.log(user.username)
if(data.username === user.username){
    toast.success("oky")
}
}
  return (
    <div>
        <ToastContainer/>
        <form onSubmit={handleSubmit}>
            <label>username:</label>
            <input type="text" value={data.username} onChange={(e) => setData(e.target.value)}/>
            <label>password:</label>
            <input type="text" value={data.password} onChange={(e) => setData(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Formvalidation