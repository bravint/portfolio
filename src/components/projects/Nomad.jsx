import { ExternalLinks } from './ExternalLinks';
import { Parallax } from 'react-scroll-parallax';

import '../../styles/projects.css';
import NomadPng from '../../assets/nomad.png';

export const Nomad = () => {
    return (
        <li className="project-container">
            <Parallax speed={20}>
            <div className="project-preview">
                <img
                    className="project-preview"
                    src={NomadPng}
                    alt="football stats preview"
                />
            </div>
            </Parallax>
            <Parallax speed={-20}>
            <div className="project-details position-right">
                <h2 className="project-title">
                    2.
                    <br />
                    Spontaneously
                    <br />
                    Nomadic.
                </h2>
                <p className="project-subtitle">
                    I love travelling, and wanted to build an app that would
                    allow me to pin, rate and share places I have been to.
                </p>
                <ExternalLinks />
            </div>
            </Parallax>
        </li>
    );
};
