import React from 'react'

const Card = (props) => {
  return (
    <div className='w-100 h-140 bg-white p-2 rounded-4xl relative ' >
      <div className="backdrop rounded-3xl w-auto h-50 bg-white top-0 relative ">
        <button className='text-fit w-fit h-fit px-8 py-2 absolute top-2 right-2 bg-[#D3D3D3] rounded-3xl '>Follow <i class="ri-add-large-line"></i> </button>
        <img className=" rounded-4xl object-cover w-full h-full " src={props.backdropImage} alt="" />
      </div>
      <div className="profile absolute w-30 h-30 rounded-full bg-red-50 top-38 left-35 border-4 border-white" >
        <img className="rounded-full object-cover w-full h-full" src={props.profileImage} alt="" />
      </div>
      <div className="profile-info bg-white h-40 mt-9 p-10 text-center">
        <h1 className='full-name text-2xl font-bold mb-2'>{props.fullName}</h1>
        <p className='details text-black w-full '>{props.description}</p>
      </div>
      <div className="followers flex justify-around mt-2 mb-4 p-4 bg-[#E5E4E2] rounded-3xl">
        <div className="likes font-bold">
          <h1>{props.likes}</h1>
          <h4>Likes</h4>
        </div>
        <div className="post font-bold">
          <h1>{props.postCount}</h1>
          <h4>Post</h4>
        </div>
        <div className="views font-bold">
          <h1>{props.views}</h1>
          <h4>Views</h4>
        </div>
      </div>
      <div className="icons bg-white w-full h-8 mt-2 flex justify-center items-center text-2xl text-gray-600">
        <i class="ri-instagram-line mr-4"></i>
        <i class="ri-twitter-line mr-4"></i>
        <i class="ri-threads-line "></i>
      </div>
    </div>
  )
}

export default Card