import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../css/style.css'

function Header(){
    return (
        <header>
            <nav className='w-full flex justify-between items-center gap-4 px-14 py-4'>
                <div>
                    <Link className="font-bold text-xl" to="/"> Jon.</Link>
                </div>

                <div className='navlinks-darkModeToggle'>
                    <div className='navbar-links'>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <Link to="/#project">Projects</Link>
                            </li>
                            <li>
                                <Link to="/#about">About</Link>
                            </li>
                            <li>
                                <Link to="/#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='darkModeToggle-GetInTouch flex items-center gap-6'>
                    <div className='dark-mode-toggle'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="#444141" d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16M2 12.5q-.213 0-.356-.144t-.144-.357t.144-.356T2 11.5h2.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm17.5 0q-.213 0-.356-.144T19 11.999t.144-.356t.356-.143H22q.213 0 .356.144t.144.357t-.144.356T22 12.5zM12 5q-.213 0-.357-.144T11.5 4.5V2q0-.213.144-.356t.357-.144t.356.144T12.5 2v2.5q0 .213-.144.356T11.999 5m0 17.5q-.212 0-.356-.144T11.5 22v-2.5q0-.213.144-.356t.357-.144t.356.144t.143.356V22q0 .213-.144.356t-.357.144M6.362 7.03l-1.44-1.395q-.147-.14-.144-.344t.149-.37q.16-.165.354-.165t.354.165L7.05 6.342q.16.166.16.354q0 .189-.15.354t-.342.153t-.356-.172m12.004 12.048l-1.416-1.421q-.16-.166-.16-.357t.16-.351q.13-.165.327-.153q.196.013.362.172l1.44 1.397q.146.14.143.344t-.149.369q-.16.165-.354.165t-.354-.165M16.95 7.059q-.165-.15-.153-.34t.172-.358l1.397-1.44q.14-.146.344-.143t.369.149q.165.16.165.354t-.165.353L17.658 7.05q-.166.16-.354.16t-.354-.15M4.921 19.083q-.165-.17-.165-.364t.165-.353l1.421-1.416q.166-.16.357-.16q.192 0 .351.16q.146.13.134.327q-.013.196-.153.362l-1.397 1.44q-.159.165-.353.162q-.195-.002-.36-.158M12 12" strokeWidth={0.8} stroke="#444141"></path>
                        </svg>
                    </div>

                    <div>
                        <button className='border rounded border-gray-100 py-2 px-4 hover:bg-gray-100 cursor-pointer'>Get In Touch</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header