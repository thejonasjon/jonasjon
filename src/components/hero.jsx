import '../css/style.css'
import { Button } from '../components/button'
import HeroAnimation from './hero-animation';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, ArrowDown, ExternalLink } from "lucide-react"


import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const svgRightLong = <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="#e8e8e8" d="M14.989 4.638a.5.5 0 0 1 .706.017l6.667 7a.5.5 0 0 1 0 .69l-6.667 7a.5.5 0 1 1-.724-.69l5.862-6.155H2a.5.5 0 0 1 0-1h18.833l-5.862-6.155a.5.5 0 0 1 .018-.707" strokeWidth={0.2} stroke="#e8e8e8"></path>
                        </svg>

const svgDownload = <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="#282828" d="M12 15.248q-.161 0-.298-.053t-.267-.184l-2.62-2.619q-.146-.146-.152-.344t.152-.363q.166-.166.357-.169q.192-.003.357.163L11.5 13.65V5.5q0-.213.143-.357T12 5t.357.143t.143.357v8.15l1.971-1.971q.146-.146.347-.153t.366.159q.16.165.163.354t-.162.353l-2.62 2.62q-.13.13-.267.183q-.136.053-.298.053M6.616 19q-.691 0-1.153-.462T5 17.384v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .691-.462 1.153T17.384 19z" strokeWidth={0.4} stroke="#282828"></path>
                    </svg>


function Hero(){
    const [textColor, setTextColor] = useState("#000");
    // const [textPosition, setTextPosition] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-28%" });

    useEffect(() => {
        if (isInView) {
            setTextColor("#000");
            // setTextPosition(0);
        } else {
            setTextColor("#aaa");
            // setTextPosition(-10)
        }
    }, [isInView]);
    return (
        <section className='w-full'>
            <div className="absolute inset-0 -z-10">
                <HeroAnimation />
            </div>
            <div className="flex flex-col justify-between px-20 pt-32" style={{height: "90vh"}} >
                <div ref={ref} className='flex flex-col justify-center gap-6'>
                    <div className=''>
                        <span className='text-xs font-medium text-gray-700 py-2 px-4 rounded-full border border-gray-200'>Available for work</span>
                    </div>

                    <div className='w-full flex flex-col gap-10'>
                        <div className='flex flex-col gap-5'>
                            <motion.h1 initial={{ color: "#aaa"}} animate={{ color: textColor}} transition={{ duration: 0.5 }} className="text-6xl font-bold leading-8 mb-2"> Jonas John</motion.h1>
                            <motion.h1 initial={{ color: "#aaa"}} animate={{ color: textColor}} transition={{ duration: 0.5 }} className='text-6xl font-bold leading-8'>Frontend Developer</motion.h1>
                        </div>

                        <div className='flex gap-16 w-full'>
                            <div>
                                <p className='text-2xl text-gray-500'>I build robust, well-tested applications with a focus on code quality and performance. Specialized in full-stack development and quality assurance.</p>
                            </div>

                            <div className='bg-gray-50 p-8 border rounded-xl border-gray-200'>
                                <h5 className='text-lg font-medium mb-2'>Current Open Source Project</h5>
                                <p className='text-md font-normal text-gray-500'>Contributing to an Outreachy open-source project to enhance testability and simplify developer workflows.</p>

                                <div className="btn-cont mt-4 w-max self-end items-end">
                                    <Link className='flex items-center gap-3 text-sm font-medium border rounded border-gray-200 px-5 py-3 hover:border-gray-50 hover:rounded-md hover:bg-gray-100 cursor-pointer'>
                                        View project details
                                        <ExternalLink color="#292929" width={18} height={18} strokeWidth={1.5} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex gap-4'>
                    <Button className="bg-black hover:bg-gray-700 text-base text-gray-50 rounded" name="View Projects" Icon={svgRightLong} />
                    <Button className="bg-white hover:bg-gray-100 text-base text-gray-900 border border-gray-300 hover:border-gray-200 rounded" name="Download Resume" Icon={svgDownload} leftIcon={true} />
                </div>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 256">
                        <path fill="#000" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm68 22v132H94V70ZM38 200V72a2 2 0 0 1 2-2h42v132H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-42V70h42a2 2 0 0 1 2 2Z" strokeWidth={3.5} stroke="#575757"></path>
                    </svg>
                        <p className='text-sm font-semibold text-gray-800'>Previously at</p>
                    </div>
                    <ul className='flex items-center gap-2'>
                        <li className='text-xs font-semibold text-gray-700 hover:text-gray-800 py-0 px-3 rounded-full border border-gray-200 hover:border-gray-300 bg-white cursor-pointer'>
                            <a href="#">Tunga</a>
                        </li>
                        <li className='text-xs font-semibold text-gray-700 hover:text-gray-800 py-0 px-3 rounded-full border border-gray-200 hover:border-gray-300 bg-white cursor-pointer'>
                            <a href="#">NIBSS</a>
                        </li>
                        <li className='text-xs font-semibold text-gray-700 hover:text-gray-800 py-0 px-3 rounded-full border border-gray-200 hover:border-gray-300 bg-white cursor-pointer'>
                            <a href="#">Google</a>
                        </li>
                        {/* <li className='text-xs font-medium text-grey-800 py-1 px-3 rounded-full border border-gray-200 bg-gray-100'>More</li> */}
                    </ul>
                </div>
            </div>

            {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex justify-center items-center">
                <button variant="ghost" size="icon" asChild>
                    <Link href="#about" className='flex flex-col justify-center items-center gap-2 text-sm text-gray-300 hover:text-gray-700'>
                    <ArrowDown className="h-6 w-6 text-gray-600 hover:text-gray-700" />
                    <span className='sr-only'>Scroll down</span>
                    </Link>
                </button>
            </div> */}

        </section>

    )
}

export default Hero