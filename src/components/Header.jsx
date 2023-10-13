import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Header({ setLightMode, lightMode }) {
    const [nav, setNav] = useState(false)
    console.log(nav);
    return (
        <motion.div className={!lightMode ? "fixed z-50 w-full text-white h-[80px] flex justify-between items-center px-4 bg-[#0a192f]" : "fixed z-50 w-full h-[80px] flex justify-between text-gray-800 items-center px-4 bg-[#f2f2f2]"} >
            <div className='flex items-center gap-5'>
                <motion.img initial={{ rotate: '180', opacity: '0' }} whileInView={{ rotate: '0', opacity: '1' }} transition={{ duration: '.30' }} viewport={{ once: true }} style={{ width: '50px' }} src="https://th.bing.com/th/id/R.c1fd8045ab1af32edb9d7d73b7466756?rik=ugYDyNzzuVKwJQ&riu=http%3a%2f%2fwww.web-portfolio.in%2fwp-content%2fuploads%2f2020%2f11%2fAbhishek-logo2.png&ehk=CKhkBCe60UF3VzTRhOX%2f7gFUDB6ca0vSQSIsLyqVhuc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <ul className='hidden  md:flex gap-10 '>

                    <motion.li initial={{ x: '-50px', opacity: '0' }} whileInView={{ x: '0', opacity: '1' }} transition={{ duration: '.30' }} viewport={{ once: true }} className='cursor-pointer'><Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={300}
                    >
                        Home
                    </Link></motion.li>
                    <motion.li initial={{ x: '-50px', opacity: '0' }} whileInView={{ x: '0', opacity: '1' }} transition={{ duration: '.30', delay: '.20' }} viewport={{ once: true }} className='cursor-pointer'><Link
                        activeClass="active"
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link></motion.li>
                    <motion.li initial={{ x: '-50px', opacity: '0' }} whileInView={{ x: '0', opacity: '1' }} transition={{ duration: '.30', delay: '.40' }} viewport={{ once: true }} className='cursor-pointer'><Link
                        activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link></motion.li>
                    <motion.li initial={{ x: '-50px', opacity: '0' }} whileInView={{ x: '0', opacity: '1' }} transition={{ duration: '.30', delay: '.60' }} viewport={{ once: true }} className='cursor-pointer'><Link
                        activeClass="active"
                        to="works"
                        smooth={true}
                        duration={500}
                    >
                        Works
                    </Link></motion.li>
                    <motion.li initial={{ x: '-50px', opacity: '0' }} whileInView={{ x: '0', opacity: '1' }} transition={{ duration: '.30', delay: '.80' }} viewport={{ once: true }} className='cursor-pointer'><Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link></motion.li>
                </ul>
            </div>
            <div>
                <div className='z-10'>
                    {!lightMode ? <i onClick={() => setLightMode(true)} class="fa-solid mr-4 fa-bolt-lightning text-xl text-white"></i> : <i onClick={() => setLightMode(false)} class="fa-solid mr-4 fa-moon text-xl "></i>}
                    <i onClick={() => setNav(true)} className="md:hidden z-50 fa-solid fa-bars"></i>
                </div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen text-2xl flex flex-col bg-[#0a192f] w-full justify-center items-center gap-8 text-white'}>
                    <li className='absolute top-7 right-4' onClick={() => setNav(false)}><i class="fa-solid fa-xmark"></i></li>
                    <li><Link
                        onClick={() => setNav(false)}
                        activeClass="active"
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link></li>
                    <li><Link
                        onClick={() => setNav(false)}
                        activeClass="active"
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link></li>
                    <li><Link
                        onClick={() => setNav(false)}
                        activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link></li>
                    <li><Link
                        onClick={() => setNav(false)}
                        activeClass="active"
                        to="works"
                        smooth={true}
                        duration={500}
                    >
                        Works
                    </Link></li>
                    <li><Link
                        onClick={() => setNav(false)}
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link></li>
                </ul>
            </div>
            <ul className='hidden fixed top-[35%] md:flex flex-col gap-1 items-end '>
                <motion.li initial={{ x: '-130px', opacity: '0' }} whileInView={{ x: '-95px', opacity: '1' }} transition={{ duration: '.20' }} whileHover={{ x: '-20px' }} viewport={{ once: true }} className='translate-x-[-95px] hover:translate-x-[-20px] duration-300'><a href="https://www.linkedin.com/in/abhishek-ks-07260a268/" className='rounded  px-2 bg-blue-600 flex items-center gap-2 py-1 text-white'>LinkedIn <i class="fa-brands text-3xl fa-linkedin"></i></a></motion.li>
                <motion.li initial={{ x: '-130px', opacity: '0' }} whileInView={{ x: '-95px', opacity: '1' }} transition={{ duration: '.20' }} whileHover={{ x: '-30px' }} viewport={{ once: true }} className='translate-x-[-95px] hover:translate-x-[-28px] duration-300'><a href="https://github.com/Abhishek7356" className='rounded  px-2 bg-[#333333] flex items-center gap-2 py-1 text-white'>Github <i class="fa-brands text-3xl fa-github"></i></a></motion.li>
                <motion.li initial={{ x: '-130px', opacity: '0' }} whileInView={{ x: '-95px', opacity: '1' }} transition={{ duration: '.20' }} whileHover={{ x: '-40px' }} viewport={{ once: true }} className='translate-x-[-95px] hover:translate-x-[-40px] duration-300'><a href="" className='rounded  px-2 bg-[#6fc2b0] flex items-center gap-2 py-1 text-white'>Email <i class="fa-solid text-3xl fa-envelope"></i></a></motion.li>
                <motion.li initial={{ x: '-130px', opacity: '0' }} whileInView={{ x: '-95px', opacity: '1' }} transition={{ duration: '.20' }} whileHover={{ x: '-20px' }} viewport={{ once: true }} className='translate-x-[-95px] hover:translate-x-[-20px] duration-300'><a href="" className='rounded  px-2 bg-[#565f69] flex items-center gap-2 py-1 text-white'>Contact <i class="fa-solid text-3xl fa-address-book"></i></a></motion.li>
            </ul>

        </motion.div>
    )
}

export default Header