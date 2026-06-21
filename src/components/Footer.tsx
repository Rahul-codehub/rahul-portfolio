import {
    FaInstagram,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="py-10 border-t border-white/10 mt-20">

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <h2 className="text-2xl font-bold gradient-text">
                    Rahul Kumar
                </h2>

                {/* Social Links */}
                <div className="flex items-center gap-5 flex-wrap">

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/rahul_.2027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:scale-110 hover:text-pink-400 transition-all duration-300"
                    >
                        <FaInstagram size={20} />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/1C1kkzHRhu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:scale-110 hover:text-blue-400 transition-all duration-300"
                    >
                        <FaFacebookF size={20} />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/rahul-codehub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:scale-110 hover:text-white transition-all duration-300"
                    >
                        <FaGithub size={20} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/rahul-kumar75"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:scale-110 hover:text-blue-300 transition-all duration-300"
                    >
                        <FaLinkedinIn size={20} />
                    </a>

                    {/* Email */}
                    <a
                        href="workwithrahul75@gmail.com"
                        className="p-3 rounded-full glass hover:scale-110 hover:text-red-400 transition-all duration-300"
                    >
                        <MdEmail size={22} />
                    </a>

                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-sm text-center">
                    © 2026 Rahul Kumar. All rights reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;