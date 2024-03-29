import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../constants"
import { logo,menu, close } from "../assets"
import { styles } from "../styles"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 fixed z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
          <Link 
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("")
              window.scrollTo(0,0)
            }}
          >
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">Mobin&nbsp;<span className="sm:block hidden">| MERN Stack Developer</span></p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
             {navLinks.map((link) => (
              <li key={link.id}
                  className={`${ active===link.title
                   ? "text-white"
                  : "text-secondary"}
                   hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
              ><Link to={`#${link.id}`}>
                {link.title}
              </Link></li>
             ) )}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
             <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
             />
             <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
             <ul className="list-none flex justify-end items-start flex-col gap-4">
             {navLinks.map((link) => (
              <li key={link.id}
                  className={`${ active===link.title
                   ? "text-white"
                  : "text-secondary"}
                    font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)}}
              ><Link to={`#${link.id}`}>
                {link.title}
              </Link></li>
             ) )}
             </ul>
             </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar