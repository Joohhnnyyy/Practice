import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Men from '../components/Men.jsx'
import Women from '../components/Women.jsx'
import Other from '../components/Other.jsx'

const App = () => {

  // const user1 ={
  //   name : 'John Doe',
  //   age : 30,
  //   email : 'john@example.com',
  //   gender : 'male'
  // }
  // const user2 ={
  //   name : 'Jane Smith',
  //   age : 25,
  //   email : 'jane@example.com',
  //   gender : 'female'
  // }

  // const user3 = {
  //   name : 'Alex Johnson',
  //   age : 28,
  //   email : 'alex@example.com',
  //   gender : 'other'
  // }


  // test()
  return (
    <div className='text-4xl'>
      
      {/* <Navbar logo ='Sheryians' color = 'red' links={['Home', 'About', 'Contact', 'Service','']} /> 
      <Navbar logo ='MyLogo' color = 'blue' links ={['Home','Services','Cources','Contact','Videos']}/>
      <Navbar logo ='BrandName' color = 'green' links ={['Welcome Home','Product','Men','Women']} /> */}

      {/* {user1.gender == 'male' ? <Men /> : <Women /> } */}
      {/* {user3.gender == 'male' ? <Men /> : user3.gender == 'female' ? <Women /> : <Other /> } */}

      <button onClick={function (){
        alert('Downloading Started')
      }} className='bg-emerald-400 w-xl h-2xl rounded-2xl px-2 py-3 m-3 active:scale-95'>
        Click To Download
        </button>


      </div>
  )
}

export default App