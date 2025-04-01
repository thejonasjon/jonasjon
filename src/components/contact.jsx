import { Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"


function Contact(){
    return (
        <section id="contact">
            <div className="bg-gray-50 py-10 sm:py-20">
                <div className="heading text-center">
                    <h3 className='text-4xl md:text-6xl font-bold mb-4'>Get In Touch</h3>
                </div>

                <div className="form w-5/6 sm:sm:w-4/6 md:sm:w-3/6 border rounded-lg border-gray-200 p-4 sm:p-8 m-auto">
                    <form action="">
                        <div className="grouped w-full flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="input-group w-full flex flex-col gap-2">
                                <label htmlFor="Name" className="text-base font-normal">Name</label>
                                <input
                                    type="text"
                                    className="border rounded-sm border-gray-200 py-2 px-4 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                    placeholder="Jonas Jon"
                                />
                            </div>

                            <div className="input-group w-full flex flex-col gap-2 mb-4">
                                <label htmlFor="email" className="text-base font-normal">Email</label>
                                <input type="email" className="border rounded-sm border-gray-200 py-2 px-4 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300" placeholder="jonas.humenu@gmail.com"/>
                            </div>
                        </div>

                        <div className="input-group flex flex-col gap-2 mb-4">
                            <label htmlFor="subject" className="text-base font-normal">Subject</label>
                            <input
                                type="text"
                                className="border rounded-sm border-gray-200 py-2 px-4 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <div className="input-group flex flex-col gap-2">
                            <label htmlFor="subject" className="text-base font-normal">Subject</label>
                            <textarea
                                className="border rounded-sm border-gray-200 h-25 sm:h-40 py-2 px-4 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                placeholder="Your message here....."
                            />
                        </div>

                        <div className="btn-grp mt-6">
                            <button className="text-base font-medium text-white w-full border rounded-sm bg-black hover:bg-gray-800 cursor-pointer py-3">Send Message</button>
                        </div>
                    </form>
                </div>

                <div className="social-text flex flex-col justify-center items-center mt-10 mt-10">
                    <p className="text-base font-normal text-gray-600 ">Or reach out directly via:</p>

                    <div className="socials flex items-center content-center gap-4 mt-4">
                        <a href="mailto:jonas.humenu@gmail.com" className="border rounded border-gray-300 py-1 px-2 hover:bg-gray-200">
                             <Mail width={20} height={20} strokeWidth={1.2} stroke="#282828"/>
                        </a>

                        <a href="https://www.linkedin.com/in/jonas-sewanu-aa3205318/" className="border rounded border-gray-300 py-1 px-2 hover:bg-gray-200" target="_blank">
                            <Linkedin stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
                        </a>

                        <a href="https://github.com/thejonasjon" className="border rounded border-gray-300 py-1 px-2 hover:bg-gray-200" target="_blank">
                            <Github width={20} height={20} stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact