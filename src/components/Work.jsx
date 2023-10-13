import React from 'react'
import { worksData } from './worksData'
import './style.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Work({ lightMode }) {

    const [maxWork, setMaxWork] = useState(6);

    let allWorks = worksData.map((item, key) => {
        if (key < maxWork) {
            return (
                <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} viewport={{ once: true }} transition={{ duration: '.20', delay: '.60' }} style={{ backgroundImage: `url(${item.background})` }} className=' pt-5 workdiv px-5 bg-[#00000041] pb-3 flex flex-col items-center justify-center gap-3'>
                    <div className=' bg-[#00000060] py-2 rounded-md hover:bg-[#00000090] duration-200'>
                        <h3 className='text-2xl text-center font-bold text-white'>{item.title}</h3>
                        <h6 className='text-center text-white'>Using :</h6>
                        <h6 className='text-center text-white'>{item.technologies}</h6>
                    </div>
                    <a href={item.live_demo} className='text-white border-1 bg-[#00000060] font-bold duration-200 hover:border-pink-600 hover:bg-pink-600 px-4 py-2 mx-auto flex items-center '>Live Demo</a>
                    <a href={item.repo} className='text-white bg-[#00000060] font-bold border-1 duration-200 hover:border-pink-600 hover:bg-pink-600 px-4 py-2 mx-auto flex items-center '>Repository</a>
                </motion.div>
            )
        }

    })

    return (
        <div name='works' className={!lightMode ? 'w-full  py-40 md:py-18 bg-[#0a192f] flex text-white items-center px-3' : 'w-full text-gray-800 py-40 md:py-18 bg-[#f2f2f2] flex items-center px-3'}>
            <div className='max-w-[1000px] mx-auto flex justify-center flex-col'>
                <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} viewport={{ once: true }} transition={{ duration: '.20' }} className='text-3xl md:text-4xl  inline font-bold border-b-4 me-auto border-pink-600'>Works</motion.h2>
                <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} viewport={{ once: true }} transition={{ duration: '.20', delay: '.20' }} className='mt-4 '>These are my latest works</motion.p>
                <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} viewport={{ once: true }} transition={{ duration: '.20', delay: '.40' }} className='mt-4 '>Please check my all projects in my <a className='underline font-bold' href="https://github.com/Abhishek7356">Github</a> account</motion.p>
                <div className='grid md:grid-cols-3 gap-5 mt-5'>
                    {allWorks}
                </div>
                {maxWork == 6 ? <motion.button onClick={() => setMaxWork(12)} initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.70' }} viewport={{ once: true }} className={!lightMode ? 'border-2 hover:border-pink-600 hover:bg-pink-600 px-2 py-2 mt-4 mx-auto flex items-center ' : 'border-2 border-[#8892be] hover:border-pink-600 hover:bg-pink-600 px-2 py-2 mt-4 mx-auto flex items-center '}>Show more...</motion.button>
                    :
                    <motion.button onClick={() => setMaxWork(6)} initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.70' }} viewport={{ once: true }} className={!lightMode ? 'border-2 hover:border-pink-600 hover:bg-pink-600 px-2 py-2 mt-4 mx-auto flex items-center ' : 'border-2 border-[#8892be] hover:border-pink-600 hover:bg-pink-600 px-2 py-2 mt-4 mx-auto flex items-center '}>Show less...</motion.button>
                }
            </div>
        </div>
    )
}

export default Work