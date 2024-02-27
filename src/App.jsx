import { useState ,useEffect } from 'react'
import './App.css'
function App() {
  const [data,setData] = useState("")
  function handleclick(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
     setData(data)})
  }
  useEffect(()=>{
    handleclick()
  },[])

  return (<div>
      <h1>Make A Joke</h1>
      {data.type==="single"?(<div className='jokeDiv'><p>{data.joke}</p></div>)
      :(<div className='jokeDiv'><p>{data.setup}</p><p>{data.delivery}</p></div>)}
      <div className='button' onClick={handleclick}>Another Joke</div>
      </div>
  )
}

export default App
