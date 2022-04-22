import { ExternalLinks } from './ExternalLinks';

import '../../styles/projects.css';

export const Nomad = () => {
    return (
        <li className="project-container">
            <div className="project-preview"></div>
            <div className="project-details position-right">
                <h2 className="project-title">
                    2.
                    <br />
                    Spontaneously
                    <br />
                    Nomadic.
                </h2>
                <p className="project-subtitle">
                    I love travelling, and wanted to build an app that
                    would allow me to pin and share places I have been to.
                </p>
                <ExternalLinks />
            </div>
        </li>
    );
};
