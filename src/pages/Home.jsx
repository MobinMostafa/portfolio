import {About, Contact, Experience, Feedbacks, StarsCanvas, Tech, Works} from '../components'

const Home = () => {
  return (
    <>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
   
    <div className='relative z-0'>
     <Contact/>
     <StarsCanvas/>
    </div>
    </>
  )
}

export default Home