import { Link } from "react-router-dom"


function Contact(){
    return (
        <section>
            <div className="bg-gray-50 py-20">
                <div className="heading text-center">
                    <h3 className='text-4xl font-bold mb-4'>Get In Touch</h3>
                </div>

                <div className="form w-3/6 border rounded-lg border-gray-200 p-8 m-auto">
                    <form action="">
                        <div className="grouped w-full flex flex-row gap-4 mb-4">
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
                                className="border rounded-sm border-gray-200 h-40 py-2 px-4 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
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
                        <Link href="to:jonas.humenu@gmail.com" className="border rounded border-gray-300 py-1 px-2 hover:bg-gray-200">
                             <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                 <path fill="#282828" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" strokeWidth={0.4} stroke="#282828"></path>
                             </svg>
                        </Link>

                        <Link href="https://www.linkedin.com/in/thejonasjon" className="border rounded border-gray-300 py-1 px-2 hover:bg-gray-200" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <g fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                                    <circle cx={4} cy={4} r={2}></circle>
                                </g>
                            </svg>
                        </Link>

                        <Link href="https://github.com/thejonasjon" className="border rounded border-gray-300 py-1 px-2 hover:bg-gray-200" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <g fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                    <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path>
                                    <path d="M9 20.027c-3 .973-5.5 0-7-3"></path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact