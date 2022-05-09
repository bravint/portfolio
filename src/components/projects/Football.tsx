import { ExternalLinks } from './ExternalLinks';

import '../../styles/projects.css';

export const Football = () => {
    const handleCodeClick = () => window.open('https://github.com/bravint/football-stats', '_blank');

    const handleDemoClick = () => window.open('https://football-stats-bravint.vercel.app/', '_blank');

    return (
        <section className="project">
            <div className="project-container left">
                <div className="project-details">
                    <h3 className="project-title">Football Stats</h3>
                    <p className="project-subtitle">
                        A central place for data on some of the major European
                        leagues, to give me an overview of teams' form prior to
                        matches in European competitions.
                    </p>
                    <ExternalLinks
                        handleCodeClick={handleCodeClick}
                        handleDemoClick={handleDemoClick}
                    />
                </div>
                <div className="project-preview football" />
            </div>
        </section>
    );
};
