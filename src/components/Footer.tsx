import { handleGithubClick, handleLinkedInClick } from '../utils/links';

import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer>
            <div>&nbsp;</div>
            <div>
                <h1 className="footer-title">Find more at</h1>
                <section className="footer-ext-links">
                    <p className="project-ext-links" onClick={handleGithubClick}>
                        GitHub
                    </p>
                    <p className="project-ext-links" onClick={handleLinkedInClick}>
                        LinkedIn
                    </p>
                </section>
            </div>
            <p className="scroll">Bravin Thillainathan 2022</p>
        </footer>
    );
};
