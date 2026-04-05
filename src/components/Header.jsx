import { useNavigate } from "react-router-dom";

import Button from './Button';

import logo from '../assets/logo.svg';

function Header() {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between px-20 py-6 bg-background border-b border-black">
            {/* Logo */}
            <div className="w-38.5 h-auto cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Pathfinder BC"  />
            </div>

            {/* Nav */}
            <nav className="flex items-center gap-8">
                <a href="#" className="font-body text-p text-body hover:text-primary">How it works</a>
                <a href="#" className="font-body text-p text-body hover:text-primary">Schools</a>
                <a href="#" className="font-body text-p text-body hover:text-primary">About</a>
                <div className="flex gap-4">
                    <Button size="md" variant="login">Login</Button>
                    <Button size="md" variant="white">Sign-up</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header;