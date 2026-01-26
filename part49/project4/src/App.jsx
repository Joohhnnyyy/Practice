import React from 'react'

const App = () => {
  return (
    <div className='flex bg-pink-500 items-center justify-between px-20 py-20 h-30 w-full'>
      <h2 className='text-6xl text-white font-bold '>hello guys</h2>
      <div className='flex gap-10 px-20 py-20'>
        <h4 className='text-xl text-white font-bold'>home</h4>
        <h4 className='text-xl text-white font-bold'>about</h4>
        <h4 className='text-xl text-white font-bold'>contact</h4>
        <h4 className='text-xl text-white font-bold'>services</h4>
        <h3 className='text-6xl text-blue-300 font-bold'>Testing</h3>
      </div>
    </div>
  )
}

export default App