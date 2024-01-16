import Navbar from "./components/Navbar"
import { Hero} from './components'
import { Outlet } from "react-router-dom"

const Layout = () => {


  return (
   <>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
       <Navbar/>
       <Hero/>
    </div>
    <Outlet/>
   </div> 
   </>
  )
}

export default Layout
