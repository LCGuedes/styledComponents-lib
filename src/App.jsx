import BoxComponent from "./components/Box"
import Teste from "./teste"

import PageDesktop from "./pages/desktop/index";
import PageMobile from "./pages/mobile/index";

const render = "mobile";
//const render = "desktop"

function App() {
  

  return (
    <>
   
     <BoxComponent backgroundColor="red" borderRadius="24px" fontSize="12px" fontWeight="700" Height="100vh"/>
    </>
     
  )
}

export default App
