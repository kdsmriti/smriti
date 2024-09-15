import { useState } from "react";
import { useEffect } from "react";
import'./App.css'

function Welcome(Props) {
  return <h1>Hello, {Props.name}!,you are {Props.gender} </h1>
}
function Games(){
  const[games,setGames] =useState(["volleyball ","basketball ","Football"])



  return (
    <div>
     <h1>This displays game.</h1>
     <ul>
      {/*<li>Vollleyball</li>*/}
      {games.map((game,index)=>{
        return <li key={index}>{game}</li>
      })}
      </ul>
      {games.map((game,index)=>{
        return<Game title={game}/>
      })}
    </div>
      
  )
}
function Game(Props){
  return(
    <div style ={{
      color:"white",
      padding:"10px",
      backgroundColor:"red",
      borderRadious:"10px",
      margin:"10px"
    }
      
    }>
      <h1 className="game-title"> {Props.title}</h1>
    </div>
  )
}


function App() {

  return <div><Welcome name ="RAM SHARMA " gender="MALE"/>
  <Welcome  name = "HARI SHARMA" gender="MALE"/>
  <Counter/> 
  <Myform/>
  <Games/>
 
  </div>
    
        
}
//component 
function Counter(){
 const [count ,setCount]=useState(0)
 const [nextVar,setNextVar]=useState(0)
 useEffect(
 ()=>{
    console.log("Counter Mounted")
    setCount(count+5)

  },[nextVar]
)

  function chNext(){
    setNextVar (nextVar+1);

  }


  
 

  function increase(){
    //count++;
    setCount(count+1)
   console.log(count)
  }
  return<div>
    <h1>The count value : {count} </h1>
  
    <button onClick={increase} onMouseEnter={
      ()=>{
        console.log("Mouse Entered")
      }
    }> Increase </button>
    <button onClick={chNext}> Change Next Count  </button>
  </div>}

  function Myform(){
    const[firstname,setFirstname]=useState()
    const[premiumUser,setPremiumUser]=useState(true)
//
    //if(premiumUser){
      //return <h2>Hello member</h2>

   // }
   // else{
     // return <h2>please register yourself </h2>
    //}
    //<h2>Firstname is : </h2>


    return<div>
      <br/>
      <br/><br/>
      <h1>This is my form </h1>
      <button onClick={
        ()=>{
          setPremiumUser(!premiumUser)
        }}>Toggle premium</button>
      
      {
        premiumUser?<h1>you are a premiumUser member </h1>:<h1>you are a normal user </h1>

      }
      
     
      <h2>Firstname is : </h2>



      <form>
        <label htmlFor="firstname">Firstname</label>
        <input value ={firstname} id="firstname" type="text"onChange={
          (e)=>{
            console.log("input changed",e.target.value)
            setFirstname(e.target.value)
          }
        } />
     
      </form>
    </div>
  }

 


export default App
