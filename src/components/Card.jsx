import React from 'react'


const Card = ({img,name,cusines,rating}) => {


  return (
  <div className='h-full w-[22vw]  border border-black p-2 m-3 '>
    <div className='h-[50vh] w-[20vw] border flex flex-col'>
        <div className='h-[40vh] w-full'>
            <img className='h-[98%] w-[98%] object-fit' src={img} alt="img" /></div>
        <div className='pl-4'>
            <h3>{name}</h3>
            <h4>{cusines}</h4>
            <h4>{rating}</h4>
        </div>
  </div>
  </div>
  )
}

export default Card