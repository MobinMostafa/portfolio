import Navbar from "./components/Navbar"
import {Hero} from './components'

const Layout = () => {


  return (
   <>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
       <Navbar/>
       <Hero/>
    </div>
   </div> 
   </>
  )
}

export default Layout
