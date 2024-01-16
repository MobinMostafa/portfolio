
import { useState, useRef} from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import emailJs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const contact = useRef(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}


  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
         variants={slideIn("left", "tween", 0.2, 1)}
         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
         <p className={styles.sectionSubText}>Get in touch</p>
         <h3 className={styles.sectionHeadText}>Contact.</h3>

         <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
         >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name"
            className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
             />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email"
            className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
             />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
             rows="7"
             name="message"
             value={form.message}
             onChange={handleChange}
             placeholder="Your message"
             className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
             />
          </label>
          <button type="submit"
           className="bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
           >
            {loading ? 'Sending ...' : 'Send'}
          </button>
         </form>
        </motion.div>
        <motion.div
         variants={slideIn("right", "tween", 0.2, 1)}
         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")