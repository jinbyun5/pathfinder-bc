import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from './Button';

import logo from '../assets/logo.svg';

function Header() {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative bg-background border-b border-black">
            <div className="flex items-center justify-between px-6 md:px-20 py-6">
                {/* Logo */}
                <div className="w-28 lg:w-38.5 h-auto cursor-pointer" onClick={() => navigate('/')}>
                    <img src={logo} alt="Pathfinder BC" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="font-body text-p text-body hover:text-primary">How it works</a>
                    <a href="#" className="font-body text-p text-body hover:text-primary">Schools</a>
                    <a href="#" className="font-body text-p text-body hover:text-primary">About</a>
                    <div className="flex gap-4">
                        <Button size="md" variant="login">Login</Button>
                        <Button size="md" variant="white">Sign-up</Button>
                    </div>
                </nav>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-6 h-0.5 bg-body block" />
                    <span className="w-6 h-0.5 bg-body block" />
                    <span className="w-6 h-0.5 bg-body block" />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 z-50 flex flex-col items-center gap-6 px-6 py-8 bg-background border-t border-border">
                    <a href="#" className="font-body text-p text-body">How it works</a>
                    <a href="#" className="font-body text-p text-body">Schools</a>
                    <a href="#" className="font-body text-p text-body">About</a>
                    <div className="flex flex-col gap-4 w-full">
                        <Button size="md" variant="login">Login</Button>
                        <Button size="md" variant="white">Sign-up</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;