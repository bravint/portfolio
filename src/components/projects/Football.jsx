import { ExternalLinks } from './ExternalLinks';
import { Parallax } from 'react-scroll-parallax';
import FootballPng from '../../assets/football.png';

import '../../styles/projects.css';

export const Football = () => {
    return (
        <li className="project-container">
            <Parallax speed={-20}>
                <div className="project-details position-left">
                    <h2 className="project-title">
                        1.
                        <br />
                        Football -
                        <br />
                        Stats.
                    </h2>
                    <p className="project-subtitle">
                        A place for me to follow european teams, so when they
                        play each other in UEFA competitions I would be able to
                        have an overview of their form prior to their matches
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
