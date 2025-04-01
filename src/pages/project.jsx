import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./projectCard";
import { ArrowBigUp, ArrowUp, ArrowUp01, ArrowUpRight } from "lucide-react";

function Project() {
    return (
        <section id="projects" className="relative">
            <div className="px-8 md:px-10 py-20 h-full w-full bg-[radial-gradient(ellipse_at_center,_#111827_0%,_#030712_50%,_black_100%)]">
                <div className="heading mb-32">
                    <h2 className="text-4xl md:text-6xl text-white font-bold mb-3">Projects</h2>
                    <p className="text-lg sm:text-xl font-normal text-gray-300 w-full sm:w-4/6 md:w-3/6">
                        Exploring the boundaries of digital experience through innovative projects that challenge conventional paradigms.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 space-y-20 md:space-y-40">
                    {[
                        {
                            name: "easyHome",
                            title: "Seamless & Secure Home Hunting",
                            description: "EasyHome is a smart platform that makes house hunting simple, secure, and accessible. It offers verified listings, 3D property views, and virtual tours, helping users explore homes before visiting. With secure messaging, real-time availability, and safe online payments, EasyHome ensures a smooth and trustworthy rental experience.",
                            skills: ["JavaScript", "HTML", "CSS", "Github", "Netlifly"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743490842/Screenshot_2025-04-01_at_7.59.45_AM_cj695f.png",
                            href: {
                                github: "https://github.com/thejonasjon/easyhome",
                                link: "https://easyhome-app.netlify.app/"
                            }
                        },
                        {
                            name: "Todo",
                            title: "Todo Web App",
                            description: "This Todo app helps you manage tasks effortlessly by allowing you to add, edit, complete, and delete tasks as needed. It also offers a simple filter to view all, completed, or uncompleted tasks, ensuring a smooth and organized task management experience.",
                            skills: ["JavaScript", "HTML", "CSS", "Github", "Netlifly"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743492647/Screenshot_2025-04-01_at_8.29.46_AM_bycluu.png",
                            href: {
                                github: "https://github.com/thejonasjon/todo",
                                link: "https://todo-9b.netlify.app/"
                            }
                        },
                        {
                            name: "Guess Game",
                            title: "Guess Game",
                            description: "This is a simple number-guessing game where the player tries to guess a randomly generated number between 1 and 20. The game provides feedback on whether the guess is correct or wrong, with a score decreasing after each incorrect guess. When the player guesses correctly, the background changes color, and the high score is updated.",
                            skills: ["JavaScript", "HTML", "CSS", "Github", "Github Page"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743497521/Screenshot_2025-04-01_at_9.51.18_AM_rm3mka.png",
                            href: {
                                github: "https://thejonasjon.github.io/guess-game/",
                                link: "https://thejonasjon.github.io/guess-game/"
                            }
                        },

                        {
                            name: "BVNK",
                            title: "BVNK - Clone",
                            description: "Worked with a team of six developers to design and build a responsive landing page. The project focused on collaboration and implementing responsive layouts using Flexbox, HTML, and CSS.",
                            skills: ["JavaScript", "HTML", "CSS", "Github", "Netilfy"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743497734/Screenshot_2025-04-01_at_9.54.45_AM_j3ab0t.png",
                            href: {
                                github: "https://github.com/thejonasjon/bvnk-clone",
                                link: "https://bvnk-clone.netlify.app/"
                            }
                        },

                        {
                            name: "Expedia",
                            title: "Expedia - Clone",
                            description: "Expedia Clone is a web application I recreated using HTML and CSS to demonstrate my growth in responsive design. This project highlights my use of CSS Flexbox and media queries to create a layout that adapts seamlessly to different screen sizes.",
                            skills: ["JavaScript", "HTML", "CSS", "Github", "Netilfy"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743498118/Screenshot_2025-04-01_at_10.01.12_AM_htguzi.png",
                            href: {
                                github: "https://github.com/thejonasjon/expedia-clone",
                                link: "https://expedia-clone-app.netlify.app/"
                            }
                        },

                        {
                            name: "VFD Bank",
                            title: "VFD Microfinance Bank - Clone",
                            description: "VFD Microfinance Bank Clone is a recreated landing page built using HTML, CSS, Flexbox, and media queries.",
                            skills: ["HTML", "CSS", "Github", "Netilfy"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743498313/Screenshot_2025-04-01_at_10.04.38_AM_kyesxk.png",
                            href: {
                                github: "https://github.com/thejonasjon/VFD-bank-clone-app",
                                link: "https://vfd-bank-clone-app.netlify.app/"
                            }
                        },

                        {
                            name: "PetOga",
                            title: "All-in-One Pet Adoption & Care Platform",
                            description: "PetOga is a seamless platform designed to simplify pet adoption and care. This web app connects pet sellers, buyers, and veterinarians, creating an all-in-one solution for pet lovers.",
                            skills: ["HTML", "CSS", "Github", "Netilfy"],
                            imageURL: "https://res.cloudinary.com/dgfz1qbhj/image/upload/v1743498830/Screenshot_2025-04-01_at_10.13.19_AM_ps9oro.png",
                            href: {
                                github: "https://github.com/thejonasjon/petOga",
                                link: "https://petoga.netlify.app/"
                            }
                        },

                    ].map((project, index) => (
                        <ProjectFadeIn key={index} {...project} />
                    ))}
                </div>

                <div className="flex justify-center mt-10 sm:mt-30">
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

export default Project;
