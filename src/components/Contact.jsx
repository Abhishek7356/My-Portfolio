import React from 'react'
import { motion } from 'framer-motion'

function Contact({ lightMode }) {
    return (
        <div name='contact' className={!lightMode ? 'w-full h-screen pt-20 pb-20 md:pb-0 md:pt-0 bg-[#0a192f] flex text-white justify-center items-center' : 'w-full h-screen text-gray-800 pb-20 md:pb-0 pt-20 md:pt-0 bg-[#f2f2f2] flex justify-center items-center'}>
            <form method='POST' action="https://getform.io/f/8ce17806-a6eb-47e9-bd5f-d511a6b6bc02" className='flex flex-col max-w-[600px] px-3 w-full'>
                <div>
                    <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20' }} viewport={{ once: true }} className='text-3xl  inline font-bold border-b-4 border-pink-600'>Contact</motion.h2>
                    <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.20' }} viewport={{ once: true }} className=' py-4'>Submit the form below or shoot me an email - ksabhishek32@gmail.com</motion.p>
                </div>
                <motion.input initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.40' }} viewport={{ once: true }} type="text" className='bg-[#ccd6f6] text-gray-800 p-2' name='name' placeholder='Name' />
                <motion.input initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.50' }} viewport={{ once: true }} type="email" className='my-4 bg-[#ccd6f6] p-2 text-gray-800'  name='email' placeholder='Email' />
                <motion.textarea initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.60' }} viewport={{ once: true }} name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2 text-gray-800' ></motion.textarea>
                <motion.button initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0', opacity: '1' }} transition={{ duration: '.20', delay: '.70' }} viewport={{ once: true }} className={!lightMode ? 'border-2 hover:border-pink-600 hover:bg-pink-600 px-4 py-4 mt-8 mx-auto flex items-center ' : 'border-2 border-[#8892be] hover:border-pink-600 hover:bg-pink-600 px-4 py-4 mt-8 mx-auto flex items-center '}>Lets Collaborate</motion.button>
            </form>
        </div>
    )
}

export default Contact