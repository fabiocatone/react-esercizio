import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import AppFooter from "./components/AppFooter"
import { main_menu, learn_Menu,reference_menu,more_menu,community_menu } from "./data/app_data"
function App() {
  

  return (
    <>
    <AppHeader menu = {main_menu} />
    <AppMain/>
    <AppFooter/>
     
    </>
  )
}

export default App
