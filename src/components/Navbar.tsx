import { useState } from 'react';
import logo from '../assets/image.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="IIITM Logo"
                            className="h-16 w-auto"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#hero"
                            className="text-gray-600 hover:text-blue-600"
                            onClick={handleLinkClick}>
                            Home
                        </a>
                        <a
                            href="#timeline"
                            className="text-gray-600 hover:text-blue-600"
                            onClick={handleLinkClick}>
                            Timelines
                        </a>
                        <a
                            href="#alumni-award"
                            className="text-gray-600 hover:text-blue-600"
                            onClick={handleLinkClick}>
                            Alumni Awards
                        </a>
                        <a
                            href="#photo-video"
                            className="text-gray-600 hover:text-blue-600"
                            onClick={handleLinkClick}>
                            Submit Photos/Videos
                        </a>
                        <a
                            href="#association-info"
                            className="text-gray-600 hover:text-blue-600"
                            onClick={handleLinkClick}>
                            Alumni Association
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-blue-600"
                            onClick={handleLinkClick}>
                            Contact
                        </a>
                        <a
                            href="https://forms.gle/jpsTnk42FB8514jE8"
                            target="_blank"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Join Alumni Cell
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-4 pt-4 pb-3 space-y-2">
                        <a
                            href="#hero"
                            onClick={handleLinkClick}
                            className="block text-gray-600 hover:text-blue-600">
                            Home
                        </a>
                        <a
                            href="#timeline"
                            onClick={handleLinkClick}
                            className="block text-gray-600 hover:text-blue-600">
                            Timelines
                        </a>
                        <a
                            href="#alumni-award"
                            onClick={handleLinkClick}
                            className="block text-gray-600 hover:text-blue-600">
                            Alumni Awards
                        </a>
                        <a
                            href="#photo-video"
                            onClick={handleLinkClick}
                            className="block text-gray-600 hover:text-blue-600">
                            Submit Photos/Videos
                        </a>
                        <a
                            href="#association-info"
                            onClick={handleLinkClick}
                            className="block text-gray-600 hover:text-blue-600">
                            Alumni Association
                        </a>
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="block text-gray-600 hover:text-blue-600">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
