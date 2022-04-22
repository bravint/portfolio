import { ExternalLinks } from './ExternalLinks';
import { Parallax } from 'react-scroll-parallax';

import '../../styles/projects.css';
import PokemonPng from '../../assets/pokemon.png'

export const PokemonForum = () => {
    return (
        <li className="project-container last-project">
            {/* <Parallax speed={-20}> */}
            <div className="project-details position-left ">
                <h2 className="project-title">
                    Pokémon
                    <br />
                    Forum .
                </h2>
                <p className="project-subtitle">
                    A place to rate and discuss the 151 original (and best) Pokémon from Pokémon Red, Blue and Yellow.
                </p>
                <ExternalLinks />
            </div>
            {/* </Parallax>
            <Parallax speed={20}> */}
            <div className="project-preview">
                <img
                    className="project-preview"
                    src={PokemonPng}
                    alt="football stats preview"
                />
            </div>
            {/* </Parallax> */}
        </li>
    );
};
