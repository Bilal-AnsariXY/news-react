import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SecondNav from './components/SecondNav'
import Main from './components/Main'

const App = () => {
  const [search,setSearch] = useState("all")
  const [data, setData] = useState(null)
  const api_key = "6a800cf325c14f81b20ddbc2882ea38e" 
  async function ch(){
    try {
      const responce = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2025-03-15&sortBy=publishedAt&apiKey=${api_key}`);
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
