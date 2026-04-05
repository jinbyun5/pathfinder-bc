import { useNavigate } from "react-router-dom";

import logo from '../assets/logo.svg'

function Footer() {

    const navigate = useNavigate();

    return (
        <footer className="flex items-center justify-between px-20 py-6 border border-primary bg-background">
            <div className="w-38.5 h-auto cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Pathfinder BC"  />
            </div>
            <p className="text-tertiary flex items-center gap-2">
                <span>&copy;</span>
                <span>2026 Pathfinder</span>
            </p>
            <nav className="flex gap-8">
                <a href="#" className="text-tertiary">Privacy</a>
                <a href="#" className="text-tertiary">Terms</a>
                <a href="#" className="text-tertiary">Contact</a>
            </nav>
        </footer>
    );
}

export default Footer;