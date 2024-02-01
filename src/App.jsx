import { useState ,useEffect } from 'react'
import './App.css'
import Joke from './Joke'

function App() {
  const[joke,setJoke] = useState("")
  const[secondJoke,setSecondJoke] = useState("")
  function handleclick(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      if(data.type==="single"){
       return (setJoke(data.joke),setSecondJoke(""))
      }else{
       return (setJoke(data.delivery),
       setSecondJoke(data.setup))
      }
    })
  }
  useEffect(()=>{
    handleclick()
  },[])
  return (<div>
      <h1>Make A Joke</h1>
      <Joke jokeType={joke} secondJoke = {secondJoke}/>
      <div className='button' onClick={handleclick}>Another Joke</div>
      </div>
  )
}

export default App
