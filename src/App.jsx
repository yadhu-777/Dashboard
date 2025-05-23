
import Nav from './components/nav'
import './App.css'
import { CookiesProvider } from "react-cookie"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {UsercontextProvider} from './components/Usercontext.jsx'
import { GeneralcontextProvider } from './components/generalcontext.jsx'
import Siignup from './components/siignup.jsx'
function App() {
 

  return (
    
    <UsercontextProvider>
      <GeneralcontextProvider>
   <CookiesProvider>
    <BrowserRouter>
   
<Routes>
 <Route path="/Siignup" element={<Siignup/>}  />

    <Route path="*" element={<Nav/>}  />
    
 

</Routes>

</BrowserRouter>
</CookiesProvider>
</GeneralcontextProvider>
</UsercontextProvider>

  )
}

export default App
