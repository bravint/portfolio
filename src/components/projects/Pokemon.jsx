import { ExternalLinks } from './ExternalLinks';

import '../../styles/projects.css';

export const PokemonForum = () => {
    return (
        <li className="project-container">
            <div className="project-details position-left ">
                <h2 className="project-title">
                    3.
                    <br />
                    Pokémon
                    <br />
                    Forum.
                </h2>
                <p className="project-subtitle">
                    A place to rate and discuss the original (and best) 151
                    Pokémon from Pokémon Red, Blue and Yellow.
                </p>
                <ExternalLinks />
            </div>
            <div className="project-preview"></div>
        </li>
    );
};
