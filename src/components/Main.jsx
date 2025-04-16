import React from 'react'
const Main = (props) => {
  return (
    <div className='flex flex-wrap items-center justify-evenly'>
      {
        props.dat && props.dat.articles.map((ele, index) => (
            <div key={index} className='border flex h-70 flex-col justify-around  w-50 m-5 p-2'>
               <div className={`bg-cover bg-center h-40 w-full`} style={{ backgroundImage: `url(${ele.urlToImage})`}}></div>
                <h1 className='font-semibold'>{ele.title}</h1>
                <button className='bg-[#B9C1C6] rounded'   onClick={() =>{
                 window.open(ele.url, '_blank')}}>Read More</button>
            </div>
        ))
      }
    </div>
  )
}
export default Main;
