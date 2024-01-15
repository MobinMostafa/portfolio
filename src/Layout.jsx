import Navbar from "./components/Navbar"
import {About, Experience, Hero} from './components'

const Layout = () => {


  return (
   <>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
       <Navbar/>
       <Hero/>
    </div>
    <About/>
    <Experience/>
   </div> 
   </>
  )
}

export default Layout
