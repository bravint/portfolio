import { Parallax } from 'react-scroll-parallax';

import { ExternalLinks } from './ExternalLinks';
import PokemonPng from '../../assets/pokemon.png';

import '../../styles/projects.css';

export const PokemonForum = () => {
    const handleCodeClick = () => {
        window.open('https://github.com/bravint/project-team-fullstack', '_blank');
    }

    const handleDemoClick = () => {
        window.open('https://github.com/bravint/project-team-fullstack', '_blank');
    }

    return (
        <li className="project-container last-project">
            <Parallax speed={0}>
                <div className="project-details position-left ">
                    <h2 className="project-title">
                        Pokémon
                        <br />
                        Forum.
                    </h2>
                    <p className="project-subtitle">
                        A forum where users can rate and talk about the 151
                        original (and best) Pokémon from Pokémon Red, Blue and
                        Yellow.
                    </p>
                    <ExternalLinks handleCodeClick={handleCodeClick} handleDemoClick={handleDemoClick}/>
                </div>
            </Parallax>
            <Parallax speed={20}>
                <div className="project-preview">
                    <img
                        className="project-preview"
                        src={PokemonPng}
                        alt="football stats preview"
                    />
                </div>
            </Parallax>
        </li>
    );
};
