import { ScrollIndicator } from './ScrollIndicator';

import '../styles/home.css';

export const Home = () => {
    const handleCodeClick = () => {
        window.open('https://github.com/bravint/', '_blank');
    }

    const handleDemoClick = () => {
        window.open('https://www.linkedin.com/in/bravint/', '_blank');
    }

    return (
        <>
            <section className="home">
                <div></div>
                <div className="hero-text">
                    <h1 className="hello-title">
                        Hello <br /> World<span className="dot">.</span>
                    </h1>
                    <h1 className="hello-subtitle">I'm Bravin</h1>
                    <h1 className="hello-subtitle">
                        A Full-Stack Software Developer based in London
                    </h1>
                    <h1 className="hello-text">
                        I build websites, apps, databases, emoji pyramids -
                        basically I love building stuff
                    </h1>
                    <section className="home-external-links">
                        <p
                            className="project-ext-links"
                            onClick={handleCodeClick}
                        >
                            GitHub
                        </p>
                        <p
                            className="project-ext-links"
                            onClick={handleDemoClick}
                        >
                            LinkedIn
                        </p>
                    </section>
                </div>
                {/* <img className="avatar" src="avatar-edit.png" alt="avatar" /> */}
                <ScrollIndicator />
            </section>
        </>
    );
};
