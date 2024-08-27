import Linkedin from '../assets/icons/linkedin-brands.svg';
import Github from '../assets/icons/github-brands.svg';

import '../styles/footer.css';

const handleGithubClick = () => window.open(EXT_URL.GITHUB, '_blank');

const handleLinkedInClick = () => window.open(EXT_URL.LINKEDIN, '_blank');

const EXT_URL = {
	LINKEDIN: 'https://www.linkedin.com/in/bravint/',
	GITHUB: 'https://github.com/bravint/',
};

export const Info = () => {
	return (
		<div className="info">
			<a className="contact-link" href="mailto:contact@bravin.co.uk">
				contact@bravin.co.uk
			</a>
			<section className="footer-ext-links">
				<img
					className="footer-icons"
					src={Linkedin}
					alt="Link to LinkedIn"
					onClick={handleLinkedInClick}
				/>
				<img
					className="footer-icons"
					src={Github}
					alt="Link to GitHub"
					onClick={handleGithubClick}
				/>
			</section>
			<p className="footer-cp">
				Created by Bravin Thillainathan &copy;2022
			</p>
		</div>
	);
};
