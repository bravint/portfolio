import { Parallax } from 'react-scroll-parallax';

import { ExternalLinks } from './ExternalLinks';
import FootballPng from '../../assets/football.png';

import '../../styles/projects.css';

export const Football = () => {
    const handleCodeClick = () => {
        window.open('https://github.com/bravint/football-stats', '_blank');
    }

    const handleDemoClick = () => {
        window.open('https://football-stats-bravint.vercel.app/', '_blank');
    }

    return (
        <li className="project-container">
            <Parallax speed={0}>
                <div className="project-details position-left">
                    <h2 className="project-title">
                        Football
                        <br />
                        Stats.
                    </h2>
                    <p className="project-subtitle">
                        I wanted a central place for data on the major European leagues, to give me an overview of teams' form prior to matches in UEFA competitions.
                    </p>
                    <ExternalLinks handleCodeClick={handleCodeClick} handleDemoClick={handleDemoClick}/>
                </div>
            </Parallax>
            <Parallax speed={30}>
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
