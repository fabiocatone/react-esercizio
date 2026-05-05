import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import AppFooter from "./components/AppFooter"
import { main_menu, learn_Menu,reference_menu,more_menu,community_menu } from "./data/app_data"
import { useState } from "react"
function App() {
  
  const [count,SetCount] = useState(0)
  function sayHello () {
    console.log("Ciao");
  }
    function increment () {
     SetCount(count-1)
      
    } 
    
  

  return (
    <>
    <p>{count}</p>
    <button onClick={increment}>aumenta</button>
    <button onClick={sayHello}> Clicca</button>
    <AppHeader menu = {main_menu} />
    <AppMain/>
    <AppFooter/>
     
    </>
  )
}

export default App
