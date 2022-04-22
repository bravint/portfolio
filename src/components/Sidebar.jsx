import GithubIcon from '../assets/github-icon.svg';
import LInkedinIcon from '../assets/linkedin-icon.svg';

export const Sidebar = () => {
    return (
        <section className="sidebar">
            <ul className="social-icon-container">
                <li>
                    <img
                        className="social-icon"
                        src={GithubIcon}
                        alt="My GitHub Profile"
                    />
                </li>
                <li>
                    <img
                        className="social-icon"
                        src={LInkedinIcon}
                        alt="My LinkedIn Profile"
                    />
                </li>
            </ul>
        </section>
    );
};
