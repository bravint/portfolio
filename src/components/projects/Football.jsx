import { ExternalLinks } from './ExternalLinks';

import '../../styles/projects.css';

export const Football = () => {
    return (
        <li className="project-container">
            <div className="project-details">
                <h2 className="project-title">
                    1.
                    <br />
                    Football - 
                    <br />
                    Stats.
                </h2>
                <p className="project-subtitle">
                    A place for me to follow european teams, so that when they
                    played each other in UEFA competitions I would be able to
                    have an overview their form prior to their matches
                </p>
                <ExternalLinks />
            </div>
            <div className="project-preview"></div>
        </li>
    );
};
