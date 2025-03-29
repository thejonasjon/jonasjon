import { Link } from "react-router-dom"

function Footer(){
    return (
        <footer>
            <div className="flex items-center justify-between border-t-1 border-gray-200 px-10 py-10">
                <div>
                    <h5 className='text-2xl font-bold mb-1'>Jonas Jon.</h5>
                    <p className='text-lg text-gray-500 font-medium mb-4'>UI/UX Designer & Full Stack Developer</p>
                </div>

                <div className="social-text">
                    <div className="socials flex items-center justify-end gap-4 mb-1">
                        <Link href="to:jonas.humenu@gmail.com" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <path fill="#282828" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" strokeWidth={0.4} stroke="#282828"></path>
                            </svg>
                        </Link>

                        <Link href="https://www.linkedin.com/in/thejonasjon" className="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <g fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                                    <circle cx={4} cy={4} r={2}></circle>
                                </g>
                            </svg>
                        </Link>

                        <Link href="https://github.com/thejonasjon" className="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <g fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                    <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path>
                                    <path d="M9 20.027c-3 .973-5.5 0-7-3"></path>
                                </g>
                            </svg>
                        </Link>

                        <Link href="https://x.com/thejonasjon" className="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                <path fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.53s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5q-.001-.418-.08-.83C21.94 5.674 23 3.01 23 3.01"></path>
                            </svg>
                        </Link>
                    </div>

                    <p className="text-gray-700">&copy; {new Date().getFullYear()} Jon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer