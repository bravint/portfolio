import { ExternalLinks } from './ExternalLinks';

import '../../styles/projects.css';

export const PokemonForum = () => {
    const handleCodeClick = () => window.open('https://github.com/bravint/project-team-fullstack','_blank');

    const handleDemoClick = () => window.open('https://pokemon-forum.herokuapp.com/', '_blank');

    return (
        <section className="project">
            <div className="project-container left">
                <div className="project-details">
                    <h3 className="project-title">Pokémon Forum</h3>
                    <p className="project-subtitle">
                        A forum where users can rate and talk about the 151
                        original (and best) Pokémon from Pokémon Red, Blue and
                        Yellow. Built as part of a group, I was responsible for
                        building out the backend and user authentication
                        strategy.
                    </p>
                    <ExternalLinks
                        handleCodeClick={handleCodeClick}
                        handleDemoClick={handleDemoClick}
                    />
                </div>
                <div className="project-preview pokemon" />
            </div>
        </section>
    );
};
