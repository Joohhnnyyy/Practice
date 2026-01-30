import React from 'react'
import './index.css'
import {useState } from 'react'


const App = () => {

  const [name, setname] = useState('')
  const [allUsers, setAllUsers] = useState(['test'])



  
  const submitHandler = (e) =>{
    e.preventDefault()
    setAllUsers([...allUsers, name])
    console.log(allUsers)
    setname('')
  }
  return (
    <div className='h-screen w-screen bg-gray-200 flex flex-col justify-center items-center flex-row gap-10'>
      <form className='flex flex-row justify-center items-center gap-10' onSubmit={(e) => {
        submitHandler(e)
      }}>
      <input type="text" placeholder='Enter your userName' className='bg-white p-20 rounded-2xl flex justify-center items-center text-3xl'
      value={name}
      required
      onChange={(e)=>{
        setname(e.target.value)
      }} />
      <button className='bg-blue-500 text-white p-20 rounded-2xl m-2' 
      >Submit</button>

      </form>
      {allUsers.map((user, index) => (
        <h1 key={index} className='text-3xl flex justify-center items-center'>{user}</h1>
      ))}
    </div>
  )
}

export default App