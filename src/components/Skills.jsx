import React from 'react'
import html from '../images/HTML5_badge.png'
import { motion } from 'framer-motion'


function Skills({ lightMode }) {
    return (
        <div name='skills' className={!lightMode ? 'w-full text-white pt-48  md:pt-0 h-screen bg-[#0a192f] flex items-center' : 'w-full pt-48 text-gray-800  md:pt-0 h-screen bg-[#f2f2f2] flex items-center'}>
            <div className='md:flex flex-col  md:px-3  gap-6 mx-auto w-full px-3 md:max-w-[1000px] justify-start'>
                <div>
                    <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20' }} viewport={{ once: true }} className='text-3xl md:text-4xl  inline font-bold border-b-4 border-pink-600'>Skills</motion.h2>
                </div>
                <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20', delay: '.20' }} viewport={{ once: true }} className='mt-4'>These are the technologies I've worked with</motion.p>
                <motion.div  className='grid w-full grid-cols-2 md:grid-cols-4 md:gap-[50px]'>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.40' }} viewport={{ once: true }} className='shadow-lg p-3 h-[140px]'>
                        <img className='w-20 mx-auto' src={html} alt="" />
                        <p className='text-center mt-3'>HTML</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.40' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://www.softorks.com/Images/css.jpg' alt="" />
                        <p className='text-center mt-3'>CSS</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.40' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png' alt="" />
                        <p className='text-center mt-3'>JAVASCRIPT</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.40' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2020/11/mongodb.png' alt="" />
                        <p className='text-center mt-3'>MONGODB</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.60' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0' alt="" />
                        <p className='text-center mt-3'>REACT JS</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.60' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png' alt="" />
                        <p className='text-center mt-3'>ANGULAR</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.60' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://icon-library.com/images/node-js-icon/node-js-icon-6.jpg' alt="" />
                        <p className='text-center mt-3'>NODE JS</p>
                    </motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.60' }} viewport={{ once: true }} className='shadow-lg p-3'>
                        <img className='w-20 mx-auto' src='https://www.technoscore.com/img/expressjs.png' alt="" />
                        <p className='text-center mt-3'>EXPRESS JS</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills