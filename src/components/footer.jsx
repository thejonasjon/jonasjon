import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

function Footer(){
    return (
        <footer>
            <div className="flex items-start sm:items-center flex-col gap-4 sm:flex-row justify-between border-t-1 border-gray-200 px-8 sm:px-10 py-10">
                <div>
                    <h5 className='text-2xl font-bold mb-1'>Jonas Jon.</h5>
                    <p className='text-lg text-gray-500 font-medium mb-4'>UI/UX Designer & Full Stack Developer</p>
                </div>

                <div className="social-text">
                    <div className="socials flex items-center justify-start sm:justify-end gap-4 mb-2 sm:mb-2">
                        <motion.a href="mailto:jonas.humenu@gmail.com"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                        >
                            <Mail width={20} height={20} strokeWidth={1.2} stroke="#282828"/>
                        </motion.a>

                        <motion.a  href="https://www.linkedin.com/in/thejonasjon" target="_blank"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                        >
                            <Linkedin stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
                        </motion.a >

                        <motion.a  href="https://github.com/thejonasjon" target="_blank"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                        >
                            <Github width={20} height={20} stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                        </motion.a >

                        <motion.a  href="https://x.com/thejonasjon" target="_blank"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                        >
                            <Twitter width={20} height={20} stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} />
                        </motion.a >
                    </div>

                    <p className="text-gray-700">&copy; {new Date().getFullYear()} Jon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer