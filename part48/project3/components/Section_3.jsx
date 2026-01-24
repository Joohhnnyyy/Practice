import React from 'react'

const Section_3 = () => {
  return (
    <div className="Section_3">
      <div className="section-3a">
        <button className='service-btn'>Services</button>
        <h2 className='section-3-heading'>Explore our full range of coaching , traninig , and tennis experiences. from first serve to match point - we've got the right program for you.</h2>
        <button className='explore-btn'>Explore More <i class="ri-arrow-right-up-long-line"></i></button>
      </div>
      <div className="section-3b">
        <div className="card-1">
          <button className='training-btn'> Training Program</button>
          <div className="bottom">
          <h3 className='card-heading'> Elevate Your Game with Personalized Training Programs</h3>
          <div className="arrow-left">
            <i class="ri-arrow-right-up-long-line"></i>
          </div>
          </div>
        </div>
      </div>
      <div className="section-3c">
        <div className="card-2">
          <button className='court-btn'>Cort Access</button>
          <h3 className='cart-content'> Hourly Court Rental</h3>
        </div>
        <div className="bottom-section">
          <p>Steps into  a space build for players - to grwo, complete, and thrive.</p>

          <div className="arrows">
          <div className="left">
          <i class="ri-arrow-left-long-line"></i>
          </div>
          <div className="right">
          <i class="ri-arrow-right-long-line"></i>
          </div>
        </div>

          </div>

        </div>
    </div>
  )
}

export default Section_3