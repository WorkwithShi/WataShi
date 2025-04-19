function Navbar(){
    return(
        <nav className="links gap-6">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>

    );
}

export default Navbar;