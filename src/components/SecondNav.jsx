import React from 'react'

const SecondNav = (props) => {
  return (
    <div className='flex h-20 w-screen items-center justify-evenly flex-col'>
      <h1 className='font-semibold mt-2'>Stay Update with TrendyNews!</h1>
      <div>
        <button className='border-none  m-2 p-0.5 bg-[#B9C1C6] rounded' onClick={()=>{
          props.sec("sports")
        }}>Sports</button>
        <button className='border-none  m-2 p-0.5 bg-[#B9C1C6] rounded' onClick={()=>{
          props.sec("politics")
        }}>Politics</button>
        <button className='border-none  m-2 p-0.5 bg-[#B9C1C6] rounded' onClick={()=>{
          props.sec("health")
        }}>Health</button>
        <button className='border-none  m-2 p-0.5 bg-[#B9C1C6] rounded' onClick={()=>{
          props.sec("entertainment")
        }}>Entertainment</button>
        <button className='border-none  m-2 p-0.5 bg-[#B9C1C6] rounded' onClick={()=>{
          props.sec("technology")
        }}>Technology</button>
      </div>
    </div>
  )
}

export default SecondNav
