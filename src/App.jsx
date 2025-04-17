import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SecondNav from './components/SecondNav'
import Main from './components/Main'

const App = () => {
  const [search,setSearch] = useState("all")
  const [data, setData] = useState(null) 
  const api_key2 = import.meta.env.VITE_API_KEY;
  const url = `https://gnews.io/api/v4/search?q=${search}&apikey=${api_key2}`
  async function ch(){
    try {
      const responce = await fetch(url);
      const x = await responce.json();
      setData(x) ;
      console.log(x);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>
  {
    ch();
  },[search])
  return (
    <>
      <Navbar s = {search} sec = {setSearch}></Navbar>
      <SecondNav s = {search} sec = {setSearch}></SecondNav>
      <Main dat={data} s= {search} sec = {setSearch}></Main>
    </>
  )
}

export default App
