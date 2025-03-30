import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlignJustify, Sun, X } from 'lucide-react';

import '../css/style.css';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header>
            <nav className='w-full flex justify-between items-center gap-4 px-6 md:px-8 lg:px-14 py-2 md:py-3 border-b border-gray-100'>
                {/* Logo */}
                <div>
                    <Link className="text-lg md:text-xl lg:text-2xl font-bold" to="/"> Jon.</Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <ul className='flex items-center gap-6'>
                        {["About", "Projects", "Experience", "Contact"].map((item) => (
                            <motion.li
                                key={item}
                                className='pb-1 cursor-pointer'
                                whileHover={{ scaleX: 1.08, color: "#000" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <a href={`#${item.toLowerCase()}`} className='text-md md:text-lg text-gray-700 font-normal'>
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    {isMobileMenuOpen ? (
                        <X strokeWidth={1.5} width={32} height={32} onClick={() => setIsMobileMenuOpen(false)} />
                    ) : (
                        <AlignJustify strokeWidth={1.5} width={32} height={32} onClick={() => setIsMobileMenuOpen(true)} />
                    )}
                </div>

                {/* Dark Mode Toggle & Get In Touch */}
                <div className='hidden lg:flex items-center gap-6'>
                    <motion.button whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, ease: "easeInOut" }} className='cursor-pointer'>
                        <Sun width={24} height={24} />
                    </motion.button>

                    <motion.a href="mailto:jonas.humenu@gmail.com" whileHover={{ scale: 1.04 }} className='border rounded border-gray-100 py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-gray-100 cursor-pointer'>
                        Get In Touch
                    </motion.a>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4"
                >
                    <ul className='flex flex-col items-center gap-4'>
                        {["About", "Projects", "Experience", "Contact"].map((item) => (
                            <li key={item} className='text-lg text-gray-700 font-medium'>
                                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </header>
    );
}

export default Header;