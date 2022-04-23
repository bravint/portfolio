import { ScrollIndicator } from './ScrollIndicator';

import '../styles/home.css';

export const Home = () => {
    return (
        <section className="home">
            <div>&nbsp;</div>
            <div className="hero-text">
                <h1 className="hello-title">
                    Hello <br /> World<span className="dot">.</span>
                </h1>
                <h1 className="hello-subtitle">I'm Bravin</h1>
                <h1 className="hello-subtitle">
                    A Full-Stack Software Developer based in London
                </h1>
                <h1 className="hello-text">
                    I build websites, databases, emoji pyramids - basically I
                    love building stuff
                </h1>
            </div>
            <ScrollIndicator />
        </section>
    );
};
