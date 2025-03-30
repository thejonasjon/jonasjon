import '../css/style.css'
import { Button } from '../components/button'

import { delay, motion, useInView } from 'framer-motion';

import aboutImgage from '../assets/images/jonas.JPG'

function About(){
    const skillsVarients = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition:
            {
                staggerChildren: 0.45,
                delay: 0.25
            }
        }
    }

    const skillChildVarient = {
        hidden: {
            opacity: 0,
        },

        show: {
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <section id="about">
            <div className='flex items-center flex-col md:flex-row justify-center gap-8 md:gap-24 px-8 md:px-20 py-32'>
                <div className='flex-1'>
                    <div className='about-text'>
                        <h2 className='text-4xl md:text-6xl font-semibold mb-4'>About Me</h2>
                        <p className='text-lg text-gray-600 mb-2'>I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional websites and applications. My expertise spans across UI/UX design, front-end and back-end development.</p>
                        <p className='text-lg text-gray-600 mb-16'>I believe in creating digital experiences that are not only visually appealing but also intuitive and accessible to all users. My approach combines creative design thinking with technical expertise to deliver solutions that exceed expectations.</p>
                    </div>

                    <div className='about-skills'>
                        <h3 className='text-xl font-semibold'>My Skills</h3>

                        <div className='flex items-center flex-wrap gap-1 md:gap-3 mt-4'>
                            {["JavaScript", "Python", "Django", "Cypress", "HTML", "CSS", "Postman", "Tailwind CSS", "Framer Motion"].map((skill) => (
                                <span variants={skillChildVarient} className='text-base font-normal text-gray-800 hover:text-gray-800 py-1 px-4 rounded-full border-gray-200 bg-gray-100'>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='about-image flex-1'>
                    <img className='rounded shadow' src={aboutImgage} alt="My about image" />
                </div>
            </div>
        </section>
    )
}

export default About