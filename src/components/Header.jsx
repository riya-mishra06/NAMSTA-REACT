import React from 'react'

const Header = () => {
  return (
   <>
   <div className='h-20 w-full flex justify-between items-center   bg-gray-100 shadow-md shadow-gray '> 
    <div className=' h-full w-full'>
        <img className='h-full w-20 object-cover p-3' src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" alt="logo" />
    </div>
    <div className='flex justify-between items-center gap-4 p-4'>
        <h3>About</h3>
        <h3>Card</h3>
        <h3>Contact</h3>
    </div>
   </div>
   </>
  )
}

export default Header