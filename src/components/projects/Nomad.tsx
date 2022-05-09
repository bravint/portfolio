import { ExternalLinks } from './ExternalLinks';
// import NomadPng from '../../assets/nomad.png';

import '../../styles/projects.css';

export const Nomad = () => {
    const handleCodeClick = () => {
        window.open(
            'https://github.com/bravint/spontaneously-nomadic-client',
            '_blank'
        );
    };

    const handleDemoClick = () => {
        window.open(
            'https://spontaneously-nomadic-client.vercel.app',
            '_blank'
        );
    };
    return (
        <section className="project">
            <div className="project-container right">
                <div className="project-preview nomad" />
                <div className="project-details">
                    <h3 className="project-title">Spontaneously Nomadic</h3>
                    <p className="project-subtitle">
                        I love travelling, and wanted to build an app that would
                        allow me to pin, rate and share places I have been to.
                    </p><br />
                    <p>
                        If you would like to demo this project use the <br /> email: <i>test@mail.com</i> and password: <i>password</i>
                    </p>
                    <ExternalLinks
                        handleCodeClick={handleCodeClick}
                        handleDemoClick={handleDemoClick}
                    />
                </div>
            </div>
        </section>
    );
};
