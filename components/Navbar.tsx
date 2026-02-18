import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (hash: string) => {
        setIsMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? ' ' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center font-bold text-white italic">Q</div>
                        <span className="text-xl font-bold tracking-tight">Qubi<span className="font-light">Ride</span></span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* <button onClick={() => handleNavClick('#about')} className="text-sm font-medium hover:text-[#ffd700] transition-colors">About</button>
                    <button onClick={() => handleNavClick('#features')} className="text-sm font-medium hover:text-[#ffd700] transition-colors">Features</button>
                    <button onClick={() => handleNavClick('#airport-ride')} className="text-sm font-medium hover:text-[#ffd700] transition-colors">Airport Ride</button>
                    <button onClick={() => handleNavClick('#how-it-works')} className="text-sm font-medium hover:text-[#ffd700] transition-colors">How it works</button> */}

                    <Link to="/support" className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all">
                        Contact Us
                    </Link>

                    <button onClick={() => handleNavClick('#download')} className="gradient-bg px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all text-white">
                        Download Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden">

                    <Link to="/support" className="text-lg text-[#ffd700]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    <button onClick={() => handleNavClick('#download')} className="text-lg text-left">Download</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
