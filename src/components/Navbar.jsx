import React, { useState } from 'react'
const Navbar = (props) => {
    const [x,setX] = useState("");
  return (
    <div id='navbar' className='flex w-screen h-auto p-5 bg-[#B9C1C6] items-center justify-between flex-wrap'>
      <h1 className='font-bold text-2xl'>LATEST NEWS </h1>
      <h3 onClick= {()=>{props.sec("all")}}>All News</h3>
      <h3 onClick={()=>{props.sec("top")}}>Top headline</h3>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" className='bg-white h-8 pl-4 border  rounded ' placeholder='type here' onChange={(e)=>{setX(e.target.value);console.log(x);}}/>
        <button className='border m-3 bg-white p-1 rounded' onClick={()=>{props.sec(x);setX("");}}>Search</button>
      </form>
    </div> )}
export default Navbar
