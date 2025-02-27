import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function AboutCard({rating,content,location,total}) {
  const stars =[];
  for(let i=1;i<=total;i++){
    if(i<=rating){
      stars.push(<span><FaStar className='text-yellow-300' /></span>);
    } 
    else{
      stars.push(
        <span>
          <FaStarHalfAlt className="text-yellow-300" />
        </span>
      );
    }
  }
  return (
    <div className='w-[300px] h-40 bg-beige rounded-lg p-4 shadow-xl border flex flex-row'>
      <div>
        <p className='flex'>
          <span className='flex'>{stars}</span>
          <span className='ml-2'>{rating}</span>
        </p>
        <p>{content}</p>
        <p className='font-semibold'>{location}</p>
      </div>
      
    </div>
  )
}

export default AboutCard
