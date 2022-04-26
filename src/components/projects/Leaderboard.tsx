import { Parallax } from 'react-scroll-parallax';

import { ExternalLink } from './ExternalLinks';
import LeaderboardPng from '../../assets/leaderboard.png';

import '../../styles/projects.css';

export const Leaderboard = () => {
    const handleCodeClick = () => {
        window.open('https://github.com/bravint/spontaneously-nomadic-client', '_blank');
    }

    const handleDemoClick = () => {
        window.open('https://github.com/bravint/spontaneously-nomadic-client', '_blank');
    }

    return (
        <li className="project-container">
            <Parallax speed={30}>
                <div className="project-preview">
                    <img
                        className="project-preview"
                        src={LeaderboardPng}
                        alt="football stats preview"
                    />
                </div>
            </Parallax>
            <Parallax speed={0}>
                <div className="project-details position-right">
                    <h2 className="project-title">
                        Leaderboard
                        <br />
                        Generator.
                    </h2>
                    <p className="project-subtitle">
                        A leaderboard generator built to keep a record of all the times that Steve (hi Steve!) failed to come first.
                    </p>
                    <ExternalLink handleCodeClick={handleCodeClick} handleDemoClick={handleDemoClick}/>
                </div>
            </Parallax>
        </li>
    );
};