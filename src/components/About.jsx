import React from 'react'
import { motion } from 'framer-motion'


function About({ lightMode }) {
    return (
        <div name='about' className={!lightMode ? 'w-full h-screen bg-[#0a192f] flex items-center' : 'w-full h-screen bg-[#f2f2f2] flex items-center'}>
            <div className={!lightMode ? 'md:flex px-3 text-white gap-6 mx-auto max-w-[1000px] justify-center' : 'md:flex px-3 text-gray-800 gap-6 mx-auto max-w-[1000px] justify-center'}>
                <div className='md:w-[50%] w-[100%] flex flex-col justify-start items-start md:items-end'>
                    <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20' }} viewport={{ once: true }} className='text-3xl md:text-4xl  font-bold border-b-4 border-pink-600'>About</motion.h2>
                    <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20', delay: '.20' }} viewport={{ once: true }} className='text-start md:text-4xl  md:text-end text-3xl font-bold pt-[20px]'>Hi. I'm Abhishek, nice to meet you.Please take a look around.</motion.h2>
                </div>
                <div className='md:w-[50%] w-[100%] pt-[20px] md:pt-[70px]'>
                    <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20', delay: '.20' }} viewport={{ once: true }}>I recently graduated from kerala university with a degree in Bachelor Of Computer Application. I've always been passionated about programming and technology and i've completed several projects that have helped me to develop my skills. I have strong technical skill particularly in MERN stack. </motion.p>
                </div>
            </div>
        </div>
    )
}

export default About