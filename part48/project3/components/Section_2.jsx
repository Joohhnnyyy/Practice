import React from 'react'

const Section_2 = () => {
  return (
    <div className="Section_2">
      <div className="section-2a">
        <button className='about-button'>About Horizon</button>
        <div className="about-content">
        <p>At Horizon, we believe in empowering individuals to achieve their fitness goals through expert guidance and a supportive community. our club has been a home for players of all levels. from eager beginners to seasoned athletes, we provide a welcoming environment for everyone.</p>
        </div>
      </div>
      <div className="section-2b">
        <div className="card1">
          <i class="ri-government-line"></i>
          <p className='card1-content'>Professional hard courts with tournment - grade lighting & climate control - play in perfect conditions, in any season.</p>
          <div className="game-modes">
          <div class="game">
          </div>
          <h3 className='game-mode'> Game Mode</h3>
          </div>
        </div>
        <div className="card2">
          <img className="card2-img" src="https://images.unsplash.com/photo-1659081440135-b5dea50fcbea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiYWRtaW50b258ZW58MHx8MHx8fDA%3D" alt="" />
          <button className='private-btn'>Private & Group Lessons</button>
        </div>
        <div className="card3">
          <h1>100+</h1>
          <h3>Pro Coaches</h3>
          <p>Our team of certified coaches are dedicated to helping you improve your skills and reach your full potential.</p>
        </div>
      </div>
      <div className="section-2c">
        <p>A few more facts about us in numbers</p>
        <div className="rating">
          <div className="hours">
            <h1>5000+</h1>
            <h3>Hours Played</h3>
          </div>
          <div className="retention">
            <h1>95%</h1>
            <h3>Member Retention</h3>
          </div>
          <div className="members">
            <h1>2000+</h1>
            <h3>Active Members</h3>
          </div>
          <div className="tournaments">
            <h1>150+</h1>
            <h3>Annual Tournaments</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_2