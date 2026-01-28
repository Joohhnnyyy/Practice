import React from 'react'
import Washroom from './components/Washroom.jsx'
      import './index.css'
      import { useState } from 'react'

const App = () => {
  const [gender, setgender] = useState('Male')

  function changeGender() {
    if(gender == 'Male'){
      setgender('Female')
    }
    else if(gender == 'Female'){
      setgender('Other')
    }
    else{
      setgender('Male')
    }
  }



  return (
    <div> 
      <div className="washroom">
        <h1>Welcome to the Washroom {gender}</h1>
        <Washroom user = {gender}/>
        <button onClick={changeGender} className='bg-red-800'>Change Gender</button>
      </div>
    </div>
  )
}

export default App