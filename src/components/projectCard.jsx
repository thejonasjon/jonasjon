import { Link } from 'react-router-dom'
import projectImage from '../assets/images/project.jpeg'
import { ArrowUpRight, Github, Layers, Scale } from 'lucide-react'

import { motion } from "framer-motion";


function ProjectCard(props ){

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-lg hover:shadow-lg transition-shadow delay-100'>
            <div className="card-image relative w-full aspect-[16/9] rounded-2xl">
    <img className='w-full h-full rounded-2xl object-cover' src={props.imageURL} alt="" />
    <div className='w-full h-full rounded-2xl absolute top-0 left-0 bg-gradient-to-r from-[rgba(140,166,219,0.2)] to-[rgba(185,147,214,0.2)]'>
    </div>
</div>


            <div className="card-texts p-6">
                <div className='flex items-center gap-2 mb-10'>
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#8CA6DB] to-[#B993D6]">
                        <Layers className="h-5 w-5 text-white" />
                    </div>

                    <div>
                        <span className="text-base font-bold text-white/60">01</span>
                    </div>

                    <div className='w-full h-0.5 rounded-2xl bg-gradient-to-r from-[#904e95] to-[#e96443]'>

                    </div>
                </div>


                <div className="heading">
                    <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-purple-500/80 to-pink-500/90 bg-clip-text text-transparent mb-2">{props.name}</h3>
                    <h4 className="text-lg sm:text-xl font-normal text-gray-400 mb-4 sm:mb-6">{props.title}</h4>
                    <p className="text-lg sm:text-xl font-normal text-gray-400 mb-8 sm:mb-10">{props.description}</p>
                </div>

                <div className="skills flex items-center flex-wrap gap-2 mt-3">
                    {
                        props.skills.map((skill, index) => (
                            <span key={index} className="text-sm text-white font-medium border rounded-full border-white/20 bg-white/10 px-3">{skill}</span>
                        ))
                    }
                </div>

                <div className="btn-cnt flex flex-wrap gap-3 sm:gap-8 mt-8">
                    <motion.a href={props.href.link} target='_blank' className="flex items-center gap-3 py-2 text-md font-medium text-gray-400 hover:text-gray-200 cursor-pointer"
                        whileHover={{ scaleX: 1.07 }}
                        transition={{ duration: 0.3 }}

                        style={{ transformOrigin: "left"}}
                        >
                        Explore Project
                        <motion.span
                            animate={{ x: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                            style={{display: "block"}}
                            >
                            <ArrowUpRight />
                        </motion.span>
                    </motion.a>

                    <motion.a href={props.href.github} target='_blank' className="flex items-center gap-3 py-2 text-md font-medium text-gray-400 hover:text-gray-200 cursor-pointer"
                        whileHover={{scaleX: 1.07}}
                        transition={{duration:0.3}}
                        style={{ transformOrigin: "right"}}
                    >
                        <Github />
                        View Code
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard