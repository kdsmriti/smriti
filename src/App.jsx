import { useState } from "react"
import "./App.css";
import Game from "./Components/Game";
function App() {
    const [games,setGames] = useState([

        {id:1, name:"Volleyball", players:"10M",color:"red",twcolor:"bg-red-500"},
        {id:2, name:"Basketball", players:"2M",color:"green",twcolor:"bg-green-500"},
        {id:3, name:"Football", players:"50M",color:"red",twcolor:"bg-red-500"}
    ]
)


   
    return (
        <div>
        <h1 className='text-3xl'> THis in index page</h1>
    
        <h1 className="text-5xl font-bold text-center">Popular Games</h1>
    
    
            {games.map((game) => (
                <Game key={game.id} game={game} />
            ))}
    
        </div>
      )
    }

      
    export default App
    
    
