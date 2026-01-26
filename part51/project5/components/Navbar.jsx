import React from 'react'

const Navbar = (props) => {
  console.log(props.color);
  return (
    <div className="text-4xl">
      <div style = {{backgroundColor: props.color}} className="nav w-full ,h-20  mb-1 flex justify-between items-center text-white font-thin p-10 border-black border-b">
        <h1>{props.logo}
          
        </h1>
        <div className="elements flex gap-10 ml-20 text-2xl">
          {props.links.map((elem,idx)=>{
            return <h2 key={idx}>{elem}</h2>
          })}


        </div>
      </div>
    </div>
  )
}

export default Navbar