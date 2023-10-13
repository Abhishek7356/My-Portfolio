import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


function Home({ lightMode }) {
  return (
    <div name='home' className={!lightMode ? 'w-full h-screen bg-[#0a192f]' : 'w-full h-screen bg-[#f2f2f2]'}>
      <div className='max-w-[1000px] flex px-4 mx-auto gap-0 flex-col  h-full w-full justify-center'>
        <motion.p initial={{ y: '50px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20' }} viewport={{ once: true }} className='text-pink-600'>Hi, my name is</motion.p>
        <motion.h1 initial={{ y: '50px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20', delay: '.20' }} viewport={{ once: true }} className={!lightMode ? 'text-3xl sm:text-5xl font-bold text-[#ccd6f6] ' : 'text-3xl sm:text-5xl font-bold text-[#6a7ed8] '}>Abhishek.k.s</motion.h1>
        <motion.h2 initial={{ y: '50px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20', delay: '.40' }} viewport={{ once: true }} className='text-3xl sm:text-5xl font-bold text-[#8892be]'>I'm a ME(A)RN Stack Developer</motion.h2>
        <motion.p initial={{ y: '50px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20', delay: '.60' }} viewport={{ once: true }} className='text-[#8892be] text-md py-4 text-md max-w-[700px]'>Well-qualified ME(A)RN Stack Developer familiar with wide range of programming
          utilities and languages. Knowledgeable of backend and frontend development requirements.</motion.p>
        <div>
          <motion.button initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.40', delay: '.80' }} viewport={{ once: true }} className={!lightMode ? 'text-white group border border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 gap-2' :'text-gray-800 group border border-2 px-6 py-3 border-[#8892be] flex items-center hover:bg-pink-600 hover:border-pink-600 gap-2' }><Link
                        activeClass="active"
                        to="works"
                        smooth={true}
                        duration={500}
                    >
                        View Work <span><i class="fa-solid fa-arrow-right group-hover:translate-x-2 duration-300"></i></span>
                    </Link></motion.button>
        </div>
      </div>
    </div>
  )
}

export default Home