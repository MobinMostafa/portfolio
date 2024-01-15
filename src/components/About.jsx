import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
             options={{
              max:45,
              scale:1,
              speed:450
             }}
             className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
             <img src={icon} alt={title} className='w-16 h-16 object-contain' />
             <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
       >
      I’m a MERN stack developer with experience in building web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. I’m also proficient in JavaScript and Python programming languages. I specialize in developing full-stack web applications that are responsive, scalable, and user-friendly. I have experience working with RESTful APIs, GraphQL, and Socket.io for real-time communication. I’m passionate about creating intuitive user interfaces and delivering high-quality code that meets the client’s requirements. I’m always eager to learn new technologies and frameworks to improve my skills and stay up-to-date with the latest trends in web development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')