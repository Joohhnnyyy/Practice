import React from 'react'
import Card from './Card'

const Hero = () => {

    const users = [
  {
    id: 1,
    fullName: "Ansh Johnson",
    description: "Product designer passionate about minimal UI, accessibility, and user-first experiences.",
    profileImage:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1685&auto=format&fit=crop",
    backdropImage:
      "https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=1667&auto=format&fit=crop",
    postCount: 128,
    likes: 1240,
    views: 18900,
  },
  {
    id: 2,
    fullName: "Sara Smith",
    description: "Frontend engineer crafting smooth animations and scalable design systems.",
    profileImage:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop",
    backdropImage:
      "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=2070&auto=format&fit=crop",
    postCount: 96,
    likes: 980,
    views: 14230,
  },
  {
    id: 3,
    fullName: "Michael Lee",
    description: "Tech enthusiast exploring AI, startups, and modern web architecture.",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop",
    backdropImage:
      "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop",
    postCount: 212,
    likes: 1675,
    views: 25640,
  },
];

  return (
    <div className='bg-black w-screen h-screen p-20 flex gap-10 flex-wrap justify-center items-center ' >

      {users.map(function(elem){
        return <Card
        key={elem.id}
        fullName={elem.fullName}
        description={elem.description}
        profileImage={elem.profileImage}
        backdropImage={elem.backdropImage}
        postCount={elem.postCount}
        likes={elem.likes}
        views={elem.views}
        />

      })}
    </div>
  )
}

export default Hero
