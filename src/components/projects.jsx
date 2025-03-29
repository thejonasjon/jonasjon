import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./projectCard";
import { ArrowBigUp, ArrowUp, ArrowUp01, ArrowUpRight } from "lucide-react";

function Projects() {
    return (
        <section className="relative">
            <div className="px-10 py-20 h-full w-full bg-[radial-gradient(ellipse_at_center,_#111827_0%,_#030712_50%,_black_100%)]">
                <div className="heading mb-32">
                    <h2 className="text-6xl text-white font-bold mb-3">Projects</h2>
                    <p className="text-xl font-normal text-gray-300 w-3/6">
                        Exploring the boundaries of digital experience through innovative projects that challenge conventional paradigms.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 space-y-20 md:space-y-40">
                    {[
                        {
                            title: "E-Commerce Testing Framework",
                            description: "A comprehensive automated testing framework for e-commerce platforms using Cypress and JavaScript.",
                            skills: ["Cypress", "JavaScript", "CI/CD", "E-Commerce"],
                            href: ["https://www.goal.com/en-ng", "https://www.goal.com/en-ng"],
                        },
                        {
                            title: "API Management Platform",
                            description: "A backend system for managing and monitoring API endpoints, with authentication and usage analytics.",
                            skills: ["Node.js", "Express", "MongoDB", "JWT"],
                        },
                        {
                            title: "Task Management App",
                            description: "A task manager with real-time collaboration and progress tracking.",
                            skills: ["React", "Firebase", "Tailwind CSS"],
                        },
                        {
                            title: "Task Management App",
                            description: "A task manager with real-time collaboration and progress tracking.",
                            skills: ["React", "Firebase", "Tailwind CSS"],
                        },
                        {
                            title: "Task Management App",
                            description: "A task manager with real-time collaboration and progress tracking.",
                            skills: ["React", "Firebase", "Tailwind CSS"],
                        },
                    ].slice(0,3).map((project, index) => (
                        <ProjectFadeIn key={index} {...project} />
                    ))}
                </div>

                <div className="flex justify-center mt-30">
                    <motion.button
                    whileHover={{scaleX: 1.06}}
                    transition={{duration:0.5, ease: "easeInOut"}}

                    className="flex items-center gap-2 text-md text-white/70 hover:text-white/80 delay-2 px-8 py-3 border-1 rounded-md border-gray-400 hover:border-gray-300 cursor-pointer">
                        All Projects
                        <ArrowUpRight strokeWidth={1.5}/>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

function ProjectFadeIn(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: props.index * 0.4 }}
        >
            <ProjectCard {...props} />
        </motion.div>
    );
}

export default Projects;
