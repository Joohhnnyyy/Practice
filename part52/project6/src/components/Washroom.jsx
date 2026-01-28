import React from 'react'

const Washroom = (props) => {
  let color = props.user =='white';
  if(props.user == 'Male'){
    color = 'lightblue';
  }
  else if(props.user == 'Female'){
    color = 'lightpink';
  }
  else{
    color = 'lightgreen';
  }

  return (
    <div>
      <div className={`washroom h-40 w-100  rounded-3xl relative justify-center items-center flex  text-3xl font-bold`} style={{backgroundColor: color}} >
        {console.log(color)}
        <h2>Welcome, {props.user}</h2>
        {console.log(props.user)}
      </div>
    </div>
  )
}

export default Washroom