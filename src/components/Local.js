import React from 'react'
import { useEffect } from 'react';
import user from "./data.json"
// import { getCurrentUser, setCurrentUser } from './LocalStorage';

function Local() {
    console.log(user,"user");

useEffect(() => {
})

const handleGetUser = () => {
    // setCurrentUser(user)
    // getCurrentUser()
}

const handleClear = () => {
    localStorage.clear("current_data")
}

  return (
    <>
    <div>Local</div>
    <button onClick={() => handleGetUser()}>get</button>
    <button onClick={() => handleClear()}>Clear</button>
    </>
  )
}

export default Local