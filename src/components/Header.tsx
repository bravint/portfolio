import '../styles/header.css';

export const Header = () => {
	return (
		<header>
			<nav>
				<a className="header-link" href="#home">
					Home
				</a>
				<a className="header-link" href="#about">
					About
				</a>
				<a className="header-link" href="#projects">
					Projects
				</a>
				<a className="header-link" href="#contact">
					Contact
				</a>
			</nav>
		</header>
	);
};
