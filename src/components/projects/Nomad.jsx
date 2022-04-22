import { Parallax } from 'react-scroll-parallax';

import { ExternalLinks } from './ExternalLinks';
import NomadPng from '../../assets/nomad.png';

import '../../styles/projects.css';

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
