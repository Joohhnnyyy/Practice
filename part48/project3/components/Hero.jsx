import React from 'react'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="image-section">
      <img className='Hero-img' src="https://images.unsplash.com/photo-1768924401996-4c8d79462660?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="left-corner">
        <div className="left-corner-content">
        <h3>Train with real Professionals. <br /> Get the real results.</h3>
        </div>
        <div className="left-corner-img">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div className="hero-content-1">
      <h1>Unlesh Your Inner Champion Today. <br /> All in One Place</h1>
      </div>
      <div className="hero-content-2">
      <p>Discover top-notch training programs, expert coaching, and a vibrant community to fuel your fitness journey. Whether you're a beginner or a seasoned athlete</p>
      </div>
      <div className="start-your-journey">
      <button className='start-journey-btn'>Start Your Own Journey</button>
      </div>
      </div>
    </div>
  )
}

export default Hero