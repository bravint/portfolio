import { ExternalLinks } from './ExternalLinks';

import '../../styles/projects.css';

export const PokemonForum = () => {
    return (
        <li className="project-container">
            <div className="project-details">
                <h2 className="project-title">
                    3.
                    <br />
                    Pokemon
                    <br />
                    Forum.
                </h2>
                <p className="project-subtitle">
                    A place to rate and discuss the original (and best!) 151
                    pokemon.
                </p>
                <ExternalLinks />
            </div>
            <div className="project-preview"></div>
        </li>
    );
};
