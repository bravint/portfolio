import '../styles/header.css';

export const Header = () => {
    return (
        <header>
            <h2>Bravin Thillainathan</h2>
            <nav>
                <a className="" href="#home">
                    Home
                </a>
                <a className="" href="#about">
                    About
                </a>
                <a className="" href="#projects">
                    Projects
                </a>
                <a
                    className="contact-int-link"
                    href="mailto:contact@bravin.co.uk"
                >
                    Say Hi!
                </a>
            </nav>
        </header>
    );
};
