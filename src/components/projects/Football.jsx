import { Parallax } from 'react-scroll-parallax';

import { ExternalLinks } from './ExternalLinks';
import FootballPng from '../../assets/football.png';

import '../../styles/projects.css';

export const Football = () => {
    return (
        <li className="project-container">
            <Parallax speed={-20}>
                <div className="project-details position-left">
                    <h2 className="project-title">
                        Football
                        <br />
                        Stats.
                    </h2>
                    <p className="project-subtitle">
                        A place for me to follow european teams, so I
                        have an overview of their form prior to matches in UEFA competitions.
                    </p>
                    <ExternalLinks />
                </div>
            </Parallax>
            <Parallax speed={20}>
                <div className="project-preview">
                    <img
                        className="project-preview"
                        src={FootballPng}
                        alt="football stats preview"
                    />
                </div>
            </Parallax>
        </li>
    );
};
