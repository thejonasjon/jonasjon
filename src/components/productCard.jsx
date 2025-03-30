import { useState, useEffect, useRef } from "react";
import { delay, hover, motion } from "framer-motion";
import projectImage from '../assets/images/project.jpeg'

import { Link } from "react-router-dom"
import { ArrowUpRight, Github, X, Plus, Maximize, Minimize, Sparkles } from "lucide-react"


function ProductCard({productDetails}){
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");

            setTimeout(() => {
                modalRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50

        },

        show: {
            opacity: 1,
            y: 0
        },

        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 2
        },
    }

    return (
        <motion.div className="parent-card border p-10 rounded-xl cursor-pointer" style={{ background: "linear-gradient(45deg, #FFFDFF 40%, #F9FEFF 79%, #FFFDFF 100%)" }}
        variants={cardVariants}
        onClick={toggleDetails}
        >
            <motion.div className="child-card relative rounded-lg p-6 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-800">
                <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-bullet h-2 w-2 rounded-full bg-amber-500"></span>
                    <span className="text-xs sm:text-sm text-gray-300 block">{productDetails.name}</span>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl text-gray-100 md:text-2xl font-bold ">{productDetails.name}</h3>
                    <h4 className="text-lg sm:text-xl text-gray-300 mb-3">{productDetails.subname}</h4>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                    {
                        productDetails.technologies.length > 0 && (
                            productDetails.technologies.slice(0, 3).map((technology, index) => (
                                <span key={index} className="px-3 py-1 rounded-full text-sm text-gray-100 font-normal bg-white/5 border border-white/10 backdrop-blur-sm">{technology}</span>
                            ))
                        )
                    }
                    {
                        productDetails.technologies.length > 0 && (
                            <span className="px-3 py-1 rounded-full text-sm text-gray-100 font-normal bg-white/5 border border-white/10 backdrop-blur-sm">{`+ ${productDetails.technologies.length - 3}`}</span>
                        )
                    }
                </div>

                <motion.div  className="[transform-origin:left]"
               whileHover={{ scaleX: 1.07 }}
               transition={{ duration: 0.2 }}>
                    <Link href={productDetails.Link} className="flex items-center text-sm font-medium text-white">
                        More Details
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </motion.div>
            </motion.div>

            {
                isOpen && (
                    <div ref={modalRef} className="w-full h-screen flex absolute z-10 text-white left-0 top-8 bg-[rgba(16,24,40,0.8)] ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-11/12 h-5/6 rounded-2xl m-auto justify-cente">
                                <div className="relative rounded-l-2xl flex-1">
                                    <img className='w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-none' src={projectImage} alt="" />

                                    <button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute p-2 top-4 right-4 z-20 bg-black/10 backdrop-blur-sm text-white hover:bg-black/40 rounded-full cursor-pointer"
                                        onClick={() => setActiveProject(null)}
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="flex-1 rounded-r-2xl bg-gradient-to-br p-14 from-gray-700 via-gray-800 to-gray-900 overflow-y-visible md:overflow-y-scroll">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-amber-700 rounded-full p-2">
                                            <Sparkles className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-gray-300 block">Spartial Computing</span>
                                            <span className="text-sm text-gray-300 block">{productDetails.year}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl text-white md:text-4xl font-bold mb-2">{productDetails.name}</h3>
                                        <h4 className="text-xl text-gray-400 mb-6">{productDetails.subname}</h4>

                                        <p className="text-gray-300 mb-8 leading-relaxed">{productDetails.longDescription}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-medium mb-3">Technologies</h4>
                                        <div className="flex gap-2">
                                            {
                                                productDetails.technologies.length > 0 && (
                                                    productDetails.technologies.map((technology, index) => (
                                                        <span key={index} className="px-3 py-1 rounded-full text-sm font-medium text-gray-100 bg-white/5 border border-white/10 backdrop-blur-md">{technology}</span>
                                                    ))
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 mt-10">
                                        <a href={productDetails.link} target="_blank" className="flex items-center gap-2 text-lg rounded-sm font-normal px-4 py-2 bg-gradient-to-l from-[#4286f4] to-[#373B44] cursor-pointer">
                                            View Project
                                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>
                                        <Link></Link>
                                        <a href={productDetails.Github} target="_blank" className="flex items-center gap-2 text-lg rounded-sm font-normal px-4 py-2 border-1 border-gray-600 cursor-pointer">
                                        <Github className="mr-2 h-4 w-4" />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
        </motion.div>
    )
}

export default ProductCard