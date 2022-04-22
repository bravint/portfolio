import '../styles/home.css';

export const Home = () => {
    return (
        <>
            <section className="home">
                <div className="hero-text">
                    <h1 className="hello-title">
                        Hello <br /> World.
                    </h1>
                    <h1 className="hello-subtitle">I'm Bravin</h1>
                    <h1 className="hello-subtitle">
                        A Full-Stack Software Developer based in London
                    </h1>
                    <h1 className="hello-text">
                        I build websites, apps, databases, emoji pyramids -
                        basically I love building stuff
                    </h1>
                </div>
                {/* <img className="avatar" src="avatar-edit.png" alt="avatar" /> */}
            </section>
            <p className="scroll">SCROLL TO SEE PROJECTS</p>
        </>
    );
};
