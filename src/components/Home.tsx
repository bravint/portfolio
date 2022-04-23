import ReactTypingEffect from 'react-typing-effect';

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
                    <ReactTypingEffect
                        staticText={'I build'}
                        typingDelay={1000}
                        speed={50}
                        eraseSpeed={50}
                        eraseDelay={1000}
                        text={[
                            `websites`,
                            `apps`,
                            `databases`,
                            `emoji pyramids`,
                        ]}
                    />
                </h1>
            </div>
            <ScrollIndicator />
        </section>
    );
};
